"use client";

import { useEffect, useState } from "react";

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="bg-grid-mesh"
      aria-hidden="true"
      style={{
        backgroundImage: `
          radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.07), transparent 80%),
          radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12), transparent 50%),
          radial-gradient(circle at 100% 50%, rgba(139, 92, 246, 0.08), transparent 40%),
          radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `,
      }}
    />
  );
}
