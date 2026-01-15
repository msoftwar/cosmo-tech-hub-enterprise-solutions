import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars
    const starCount = 200;
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * 1000,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

    const createShootingStar = () => {
      if (Math.random() < 0.01 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 12,
          opacity: 1,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Dark sky gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "hsl(240, 20%, 4%)");
      gradient.addColorStop(0.5, "hsl(260, 25%, 6%)");
      gradient.addColorStop(1, "hsl(280, 20%, 8%)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw and update stars
      starsRef.current.forEach((star) => {
        // Move stars towards viewer
        star.z -= 0.3;

        // Reset star if it's too close
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.z = 1000;
        }

        // Project 3D to 2D
        const scale = 400 / star.z;
        const projectedX = star.x * scale + centerX;
        const projectedY = star.y * scale + centerY;
        const projectedSize = star.size * scale * 0.5;

        // Only draw if on screen
        if (projectedX >= 0 && projectedX <= canvas.width && projectedY >= 0 && projectedY <= canvas.height) {
          // Twinkle effect
          const twinkle = Math.sin(Date.now() * 0.003 + star.x) * 0.3 + 0.7;
          const brightness = star.opacity * twinkle * (1 - star.z / 1000);

          // Draw star with glow
          ctx.beginPath();
          const starGradient = ctx.createRadialGradient(
            projectedX, projectedY, 0,
            projectedX, projectedY, projectedSize * 3
          );
          starGradient.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
          starGradient.addColorStop(0.3, `rgba(200, 220, 255, ${brightness * 0.5})`);
          starGradient.addColorStop(1, "transparent");
          ctx.fillStyle = starGradient;
          ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core of star
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Create and update shooting stars
      createShootingStar();
      
      shootingStars.forEach((star, index) => {
        star.x += star.speed;
        star.y += star.speed * 0.6;
        star.opacity -= 0.015;

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        // Draw shooting star
        const gradient = ctx.createLinearGradient(
          star.x - star.length, star.y - star.length * 0.6,
          star.x, star.y
        );
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.8, `rgba(150, 200, 255, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);
        
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(star.x - star.length, star.y - star.length * 0.6);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Glow at head
        ctx.beginPath();
        const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8);
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        headGlow.addColorStop(0.5, `rgba(150, 200, 255, ${star.opacity * 0.5})`);
        headGlow.addColorStop(1, "transparent");
        ctx.fillStyle = headGlow;
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle nebula clouds
      const time = Date.now() * 0.0001;
      
      // Purple nebula
      const nebulaGradient1 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time) * 30,
        0,
        canvas.width * 0.8,
        canvas.height * 0.3,
        300
      );
      nebulaGradient1.addColorStop(0, "rgba(139, 92, 246, 0.08)");
      nebulaGradient1.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
      nebulaGradient1.addColorStop(1, "transparent");
      ctx.fillStyle = nebulaGradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cyan nebula
      const nebulaGradient2 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.cos(time * 1.3) * 40,
        canvas.height * 0.7 + Math.sin(time * 1.3) * 25,
        0,
        canvas.width * 0.2,
        canvas.height * 0.7,
        250
      );
      nebulaGradient2.addColorStop(0, "rgba(6, 182, 212, 0.06)");
      nebulaGradient2.addColorStop(0.5, "rgba(6, 182, 212, 0.02)");
      nebulaGradient2.addColorStop(1, "transparent");
      ctx.fillStyle = nebulaGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
}
