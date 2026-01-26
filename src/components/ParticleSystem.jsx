import { useRef, useEffect, useCallback } from 'react';
import styles from './ParticleSystem.module.css';

// Particle class for better performance
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    // Start particles distributed across screen immediately
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = Math.random() * 1.5 + 0.8;
    this.size = Math.random() * 3 + 1.5;
    this.opacity = Math.random() * 0.7 + 0.4;
    this.life = Math.random() * 0.5 + 0.5; // Start with varied life
    this.decay = Math.random() * 0.003 + 0.0005;
  }

  reset() {
    // Equal distribution across all edges
    const edge = Math.floor(Math.random() * 4);


    switch(edge) {
      case 0: // Top edge - full width
        this.x = Math.random() * this.canvas.width;
        this.y = -15;
        this.vx = (Math.random() - 0.5) * 2.0;
        this.vy = Math.random() * 2.5 + 1.2;
        break;
      case 1: // Bottom edge - full width
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height + 15;
        this.vx = (Math.random() - 0.5) * 2.0;
        this.vy = -(Math.random() * 2.5 + 1.2);
        break;
      case 2: // Left edge - full height
        this.x = -15;
        this.y = Math.random() * this.canvas.height;
        this.vx = Math.random() * 2.5 + 1.2;
        this.vy = (Math.random() - 0.5) * 2.0;
        break;
      default: // Right edge - full height
        this.x = this.canvas.width + 10;
        this.y = Math.random() * this.canvas.height;
        this.vx = -(Math.random() * 2.5 + 1.2); // Strong leftward movement
        this.vy = (Math.random() - 0.5) * 2.0;
        break;
    }

    this.size = Math.random() * 4 + 2; // Bigger particles
    this.opacity = Math.random() * 0.8 + 0.5; // More visible
    this.life = 1;
    this.decay = Math.random() * 0.002 + 0.0003; // Longer life
  }

  update(mouse) {
    // Mouse interaction - stronger and more visible
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
      const force = (200 - distance) / 200;
      const attraction = 0.25;
      this.vx += (dx / distance) * force * attraction;
      this.vy += (dy / distance) * force * attraction;

    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Fade out over time
    this.life -= this.decay;
    this.opacity = this.life * 0.5;

    // Reset if out of bounds or faded (check all edges)
    if (this.y > this.canvas.height + 20 ||
        this.y < -20 ||
        this.x < -20 ||
        this.x > this.canvas.width + 20 ||
        this.life <= 0) {
      this.reset();
    }

    // Less damping for more responsive movement
    this.vx *= 0.992;
    this.vy *= 0.992;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0.1, this.opacity);

    // Random green colors that complement skin tones in portraits
    const greenColors = [
      '#2d5a27', // Dark forest green
      '#3d7c47', // Medium forest green
      '#4a9b59', // Fresh green
      '#5cb370', // Bright green
      '#6fcc7f', // Light green
      '#7dd87f', // Mint green
      '#8ee490', // Pale green
      '#a0f0a0'  // Very light green
    ];

    const color = greenColors[Math.floor(Math.random() * greenColors.length)];

    // Draw glowing particle with random green color
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const ParticleSystem = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isRunningRef = useRef(true);

  const handleMouseMove = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = event.clientX - rect.left;
    mouseRef.current.y = event.clientY - rect.top;

  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    // Use display size directly for particle calculations
    canvas.width = rect.width;
    canvas.height = rect.height;

    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    // Optimized particle count for performance
    const particleCount = Math.min(80, Math.floor((rect.width * rect.height) / 15000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle(canvas));

  }, []);

  const animate = useCallback(() => {
    if (!isRunningRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Clear canvas completely first, then add slight trail effect
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update(mouseRef.current);
      particle.draw(ctx);
    });

    // Draw connections between nearby particles with green tones
    ctx.strokeStyle = 'rgba(95, 179, 112, 0.2)';
    ctx.lineWidth = 1;

    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          ctx.save();
          ctx.globalAlpha = (110 - distance) / 110 * 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Ensure animation is running
    isRunningRef.current = true;

    // Initialize
    resizeCanvas();
    animate();

    // Event listeners - add to both canvas and document
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      isRunningRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resizeCanvas, animate, handleMouseMove]);

  // Keep animation running always for better user experience
  // Visibility optimization removed to prevent animation stopping issues

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 1,
        // border: '1px solid red' // Debug border - removed
      }}
    />
  );
};

export default ParticleSystem;