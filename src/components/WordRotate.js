"use client";

import { useState, useEffect } from "react";

export default function WordRotate({
  words = [],
  duration = 2800,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  if (!words || words.length === 0) return null;

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        transition: "opacity 300ms ease, transform 300ms ease",
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {words[index]}
    </span>
  );
}
