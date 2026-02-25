// src/components/Spotlight.tsx
"use client";

import { useSpotlight } from "@/components/SpotlightProvider";
import { ReactNode, useRef, useEffect, useState } from "react";

interface SpotlightProps {
    children: ReactNode;
    className?: string;
    size?: number;
    opacity?: number;
    color?: string;
}

export default function Spotlight({
    children,
    className = "",
    size = 600,
    opacity = 0.6,
    color = "rgb(255, 0, 0)" // azul com transparência
}: SpotlightProps) {
    const { mousePosition } = useSpotlight();
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({
                x: mousePosition.x - rect.left,
                y: mousePosition.y - rect.top,
            });
        }
    }, [mousePosition]);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-visible z-30 ${className}`}
        >
            {/* Camada de luz que segue o mouse */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
                style={{
                    background: `radial-gradient(circle ${size}px at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
                    opacity: opacity,
                }}
            />

            {/* Conteúdo */}
            <div className="relative z-40">
                {children}
            </div>
        </div>
    );
}