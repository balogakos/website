"use client"

import { useEffect, useRef } from "react"

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Mouse tracking on window
    let mouse = { x: -1000, y: -1000, radius: 150 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave); // when mouse leaves viewport

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.size = Math.random() * 3.5 + 2;
        
        const colors = [
          "rgba(0, 0, 0, 0.7)",       // black
          "rgba(0, 0, 0, 0.7)",       // black
          "rgba(239, 68, 68, 0.8)",   // red
          "rgba(239, 68, 68, 0.8)",   // red
          "rgba(120, 120, 120, 0.4)", // gray
          "rgba(120, 120, 120, 0.4)", // gray
          "rgba(120, 120, 120, 0.4)"  // gray
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction (repel)
        if (mouse.x > -1000) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 5;
            this.y -= (dy / dist) * force * 5;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Ensure particles stay within bounds after repel
        if (this.x < 0) this.x = 0;
        if (this.x > width) this.x = width;
        if (this.y < 0) this.y = 0;
        if (this.y > height) this.y = height;

        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glowing effect to red particles
        if (this.color === "rgba(239, 68, 68, 0.8)") {
           ctx.shadowBlur = 12;
           ctx.shadowColor = this.color;
           ctx.fill();
           ctx.shadowBlur = 0;
        }
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      // Increase count slightly since it spans full window height now
      const particleCount = Math.min(Math.floor((width * height) / 12000), 250);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 120) {
            ctx.beginPath();
            const opacity = 1 - (dist / 120);
            ctx.strokeStyle = `rgba(120, 120, 120, ${opacity * 0.4})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse with red/accent lines
        if (mouse.x > -1000) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx*mdx + mdy*mdy);
          if (mdist < 180) {
            ctx.beginPath();
            const opacity = 1 - (mdist / 180);
            ctx.strokeStyle = `rgba(239, 68, 68, ${opacity * 0.6})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => p.update());

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-80">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
    </div>
  );
}
