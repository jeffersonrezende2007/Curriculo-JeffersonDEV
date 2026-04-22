"use client";
import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const c = canvas.getContext("2d");
    if (!c) return;

    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    // Usar ResizeObserver para captar tamanhos reais do parent em vez de window
    const resizeObserver = new ResizeObserver(() => {
      if (canvas) {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
      }
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener("resize", () => {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
      });
    }

    const mouse = { x: w / 2, y: h / 2 };
    let targetMouse = { x: w / 2, y: h / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove as EventListener);

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;

        // Interaction with mouse (repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }

      draw() {
        if (!c) return;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "rgba(201, 168, 76, 0.6)"; // Champagne color
        c.fill();
      }
    }

    const nodes: Node[] = [];
    const numNodes = Math.min(Math.floor(w * h / 9000), 120); 

    for (let i = 0; i < numNodes; i++) {
      nodes.push(new Node());
    }

    let animationFrameId: number;

    const animate = () => {
      if (!c) return;
      c.clearRect(0, 0, w, h);

      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      // Mouse glow
      const grad = c.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
      grad.addColorStop(0, "rgba(201, 168, 76, 0.08)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      c.fillStyle = grad;
      c.fillRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Aumentado a distância de conexão e opacidade para "listras mais parentes"
          if (dist < 200) {
            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.lineTo(nodes[j].x, nodes[j].y);
            c.strokeStyle = `rgba(201, 168, 76, ${0.4 * (1 - dist / 200)})`;
            c.lineWidth = 1.2;
            c.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as EventListener);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
