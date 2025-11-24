import React, { useEffect, useRef, useState } from "react";

export default function ImageLoop({
  images = [],
  speed = 0.1,
  imageHeight = 260,
  gap = 40,
  fadeOutColor = "#7ea38f",
}) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const repeated = [...images, ...images, ...images];

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 3;
      setContentWidth(width);
    }
  }, [images, gap, imageHeight]);

  useEffect(() => {
    let raf;

    const animate = () => {
      setOffset((prev) => {
        const next = prev - speed * 5;

        if (Math.abs(next) >= contentWidth) {
          return next + contentWidth;
        }

        return next;
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed, contentWidth]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        backgroundColor: fadeOutColor,
        padding: "20px 0",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: `${gap}px`,
          alignItems: "center",
          transform: `translateX(${offset}px)`,
          willChange: "transform",
        }}
      >
        {repeated.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || ""}
            style={{
              height: imageHeight,
              width: "auto",
              borderRadius: "12px",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
