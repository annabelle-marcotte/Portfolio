import React, { useEffect, useRef, useState } from "react";

export default function ImageLoop({
  images = [],
  speed = 0.2,
  imageHeight = 260,
  gap = 40,
  fadeOutColor = "#7ea38f",
}) {
  const loopRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [offset, setOffset] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const duplicated = [...images, ...images];

  useEffect(() => {
    if (loopRef.current) {
      setContentWidth(loopRef.current.scrollWidth / 2);
    }
  }, [images, imageHeight, gap]);

  useEffect(() => {
    let rafId;

    const animate = () => {
      setOffset((prev) => prev - (speed * 10 + velocity));
      setVelocity((v) => v * 0.95);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed, velocity]);

  const handleDown = (e) => {
    setIsDragging(true);
    setLastX(e.clientX || e.touches?.[0].clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches?.[0].clientX;
    const delta = x - lastX;
    setLastX(x);
    setVelocity(delta * 0.3);
  };

  const handleUp = () => setIsDragging(false);

  const visualOffset =
    contentWidth > 0
      ? ((offset % contentWidth) + contentWidth) % contentWidth
      : 0;

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        backgroundColor: fadeOutColor,
        padding: "20px 0",
        userSelect: "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
      <div
        ref={loopRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${gap}px`,
          transform: `translateX(-${visualOffset}px)`,
          willChange: "transform",
          transition: isDragging ? "none" : "transform 0.05s linear",
        }}
      >
        {duplicated.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || ""}
            style={{
              height: imageHeight,
              width: "auto",
              borderRadius: "12px",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}
