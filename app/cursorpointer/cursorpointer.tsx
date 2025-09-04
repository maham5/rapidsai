import React, { useEffect, useRef } from "react";

export default function SmokeyCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // 
    const gl = getWebGLContext(canvas);
    if (!gl) return;

    resizeCanvas();

    const pointers = [newPointer()];

    // Simple smoke-like effect: just draw circles on mouse move
    function drawCircle(x, y) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    function handleMouseMove(e) {
      drawCircle(e.clientX, e.clientY);
    }

    function handleResize() {
      resizeCanvas();
    }

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function getWebGLContext(canvas) {
      return canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("2d");
    }

    function newPointer() {
      return { x: 0, y: 0, dx: 0, dy: 0, down: false, moved: false };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />;
}
