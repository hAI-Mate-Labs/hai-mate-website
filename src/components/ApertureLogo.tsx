"use client";

import React, { useId } from "react";

interface ApertureLogoProps {
  className?: string;
  size?: number | string;
  activeSegment?: "all" | "outer" | "conduit" | "node";
  glow?: boolean;
}

export default function ApertureLogo({
  className = "h-9 w-9",
  size,
  activeSegment = "all",
  glow = false,
}: ApertureLogoProps) {
  const uniqueId = useId().replace(/:/g, "_");
  const maskId = `aperture-mask-${uniqueId}`;

  const isOuterActive = activeSegment === "all" || activeSegment === "outer";
  const isConduitActive = activeSegment === "all" || activeSegment === "conduit";
  const isNodeActive = activeSegment === "all" || activeSegment === "node";

  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? "drop-shadow-[0_0_12px_rgba(0,242,254,0.6)]" : ""} transition-all duration-300`}
      style={size ? { width: size, height: size } : undefined}
      aria-label="hAI Mate! Open Aperture Logo"
    >
      <defs>
        <mask id={maskId}>
          <rect width="512" height="512" fill="#FFFFFF" />
          {/* The 45° Conduit cutting through the ecosystem */}
          <rect
            x="-100"
            y="238"
            width="712"
            height="36"
            rx="18"
            fill="#000000"
            transform="rotate(-45 256 256)"
          />
          {/* Central clearance for the human operator node */}
          <circle cx="256" cy="256" r="32" fill="#000000" />
        </mask>

        {/* Subtle radial glow filter for the central cyan node */}
        <filter id={`glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* The Outer Circle (Ecosystem in balance) */}
      <circle
        cx="256"
        cy="256"
        r="180"
        fill={isOuterActive ? "#FFFFFF" : "#475569"}
        mask={`url(#${maskId})`}
        className="transition-all duration-300"
        opacity={isOuterActive ? 1 : 0.4}
      />

      {/* When Conduit is explicitly focused, render guide lines */}
      {activeSegment === "conduit" && (
        <rect
          x="-100"
          y="238"
          width="712"
          height="36"
          rx="18"
          fill="#00F2FE"
          opacity="0.35"
          transform="rotate(-45 256 256)"
          className="animate-pulse"
        />
      )}

      {/* The Central Cyan Node (Human operator at the center) */}
      <circle
        cx="256"
        cy="256"
        r={isNodeActive ? 14 : 12}
        fill="#00F2FE"
        className="transition-all duration-300"
        filter={`url(#glow-${uniqueId})`}
      />
      <circle
        cx="256"
        cy="256"
        r="5"
        fill="#04101A"
        className="transition-all duration-300"
        opacity={isNodeActive ? 0.9 : 0.5}
      />
    </svg>
  );
}
