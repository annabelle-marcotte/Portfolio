import React, { useEffect, useRef, useState } from "react";

export default function ImageLoop({
  images = [],
  speed = 0.3, // smaller = slower base speed
  imageHeight = 260,
  gap = 40,
  fadeOutColor = "#7ea38f",
}) {
  const loopRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [offset, setOffset] = useState(0);

  // ----- Auto-scroll + inertia -----
  useEffect(() => {
    let rafId;
    function animate() {
      // Apply auto speed + user drag velocity
      setOffset((prev) => {
        let newOffset = prev - (speed * 10 + velocity);
        const width = loopRef.current.scrollWidth / 2;
        if (newOffset <= -width) newOffset += width;
        if (newOffset >= 0) newOffset -= width;
        return newOffset;
      });

      // Apply inertia decay
      setVelocity((v) => v * 0.95);
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [velocity, speed]);

  // ----- Mouse / touch drag -----
  function handleDown(e) {
    setIsDragging(true);
    setLastX(e.clientX || e.touches?.[0].clientX);
  }
  function handleMove(e) {
    if (!isDragging) return;
    const x = e.clientX || e.touches?.[0].clientX;
    const delta = x - lastX;
    setLastX(x);
    setVelocity(delta * 0.3); // how strongly drag affects scroll
  }
  function handleUp() {
    setIsDragging(false);
  }

  // Duplicate images for seamless loop
  const duplicated = [...images, ...images];

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
          transform: `translateX(${offset}px)`,
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
              transition: "transform 0.3s ease",
            }}
            className="loop-image"
          />
        ))}
      </div>
    </div>
  );
}
