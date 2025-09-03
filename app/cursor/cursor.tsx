"use client";

import { useEffect, useRef } from "react";

export default function SmokeyCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "rgba(255, 99, 132, ALPHA)",   // pink-red
      "rgba(54, 162, 235, ALPHA)",   // blue
      "rgba(75, 192, 192, ALPHA)",   // teal
      "rgba(255, 206, 86, ALPHA)",   // yellow
      "rgba(153, 102, 255, ALPHA)"   // purple
    ];

    const trail: { x: number; y: number; alpha: number; color: string }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const randomColor =
        colors[Math.floor(Math.random() * colors.length)];
      trail.push({ x: e.clientX, y: e.clientY, alpha: 1, color: randomColor });
    };
    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 35, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("ALPHA", p.alpha.toString());
        ctx.fill();
        p.alpha -= 0.02;
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        if (trail[i].alpha <= 0) trail.splice(i, 1);
      }

      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas id="smokey-cursor" ref={canvasRef} />;
}
