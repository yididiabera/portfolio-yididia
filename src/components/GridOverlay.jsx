import { useState, useEffect } from "react";

const GridOverlay = ({
  baseSize = 24, // Base grid cell size
  axisSize = 96, // Axis highlight size
  opacity = 0.05, // Base opacity
  animated = true, // Enable animations
  glow = true, // Enable subtle glow
  flickerInterval = 4000, // Flicker timing
  showCenter = true, // Show center point
}) => {
  const [flicker, setFlicker] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!animated) return;

    // Flicker effect
    const flickerTimer = setInterval(() => {
      setFlicker((prev) => !prev);
    }, flickerInterval);

    // Subtle position drift for organic feel
    const driftTimer = setInterval(() => {
      setPosition({
        x: 50 + Math.sin(Date.now() / 8000) * 2,
        y: 50 + Math.cos(Date.now() / 10000) * 2,
      });
    }, 100);

    return () => {
      clearInterval(flickerTimer);
      clearInterval(driftTimer);
    };
  }, [animated, flickerInterval]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        opacity: flicker ? opacity * 1.6 : opacity,
        transition: "opacity 700ms ease",
      }}
    >
      {/* Base grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)`,
          backgroundSize: `${baseSize}px ${baseSize}px`,
          transform: `translate(${position.x - 50}%, ${position.y - 50}%)`,
        }}
      />

      {/* Axis highlights */}
      <div
        className={`absolute inset-0 ${glow ? "opacity-10" : "opacity-5"}`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 0, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: `${axisSize}px ${axisSize}px`,
          transform: `translate(${position.x - 50}%, ${position.y - 50}%)`,
        }}
      />

      {/* Center point */}
      {showCenter && (
        <div
          className="absolute w-1 h-1 rounded-full bg-cyan-400 opacity-20"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: glow ? "0 0 4px rgba(0, 240, 255, 0.5)" : "none",
          }}
        />
      )}

      {/* Optional scanlines effect */}
      {animated && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              transparent 95%,
              rgba(0, 240, 255, 0.03) 96%,
              transparent 97%
            )`,
            backgroundSize: "100% 8px",
          }}
        />
      )}
    </div>
  );
};

export default GridOverlay;
