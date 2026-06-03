"use client";

import { useEffect, useRef } from "react";

const KEYWORDS = [
  "TENSION",
  "TRUST",
  "ENGAGEMENT",
  "INTENT",
  "UNCERTAINTY",
  "COGNITION",
  "VALENCE",
  "FRICTION",
  "VELOCITY",
  "CONTEXT"
];
const CHARS = KEYWORDS.join("");
const MESSAGES = [
  "Human State Detected",
  "Intent Confidence: {val}%",
  "Preference Drift: Low",
  "Trust Readiness: High",
  "Signal Match: {val}%"
];

class Particle {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
  isSpecial: boolean;
  targetX: number | null = null;
  targetY: number | null = null;
  originX: number;
  originY: number;

  constructor(x: number, y: number, char: string, speed: number) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.char = char;
    this.speed = speed;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.isSpecial = Math.random() > 0.95;
  }

  update(
    height: number,
    mouseX: number,
    mouseY: number,
    isAssembling: boolean,
    lerpFactor: number
  ) {
    if (isAssembling && this.targetX !== null && this.targetY !== null) {
      // Stage 3: Assembling
      this.x += (this.targetX - this.x) * lerpFactor;
      this.y += (this.targetY - this.y) * lerpFactor;
      this.opacity = 1;
    } else {
      // Stage 1 & 2: Rain + Distortion
      this.y += this.speed;
      if (this.y > height) {
        this.y = -20;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      // Distortion logic (Stage 2)
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        const force = (120 - distance) / 120;
        this.x += (dx / distance) * force * 4; // Push away
      } else {
        // Return to vertical stream
        this.x += (this.originX - this.x) * 0.1;
      }
      
      this.targetX = null;
      this.targetY = null;
    }
  }
}

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: 0, lastY: 0, stableTime: 0 });
  const stateRef = useRef({ isAssembling: false, currentMessage: "" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const fontSize = 14;
    
    const init = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      
      particles = [];
      const columns = Math.floor(rect.width / 18);
      for (let i = 0; i < columns; i++) {
        const x = i * 18;
        const count = Math.floor(rect.height / 20) + 5;
        const isKeywordColumn = Math.random() > 0.8;
        const keyword = isKeywordColumn ? KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)] : null;
        
        for (let j = 0; j < count; j++) {
          let char = "";
          if (keyword && j < keyword.length) {
            char = keyword[j];
          } else {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          particles.push(new Particle(x, Math.random() * rect.height, char, Math.random() * 2 + 1));
        }
      }
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height); // No trail effect, crisp clear

      // Mouse stability check
      const m = mouseRef.current;
      const distMoved = Math.sqrt(Math.pow(m.x - m.lastX, 2) + Math.pow(m.y - m.lastY, 2));
      
      if (distMoved < 1) {
        m.stableTime += 16.6; // approx 60fps
      } else {
        m.stableTime = 0;
        stateRef.current.isAssembling = false;
      }
      m.lastX = m.x;
      m.lastY = m.y;

      if (m.stableTime > 1000 && !stateRef.current.isAssembling) {
        stateRef.current.isAssembling = true;
        const rawMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        stateRef.current.currentMessage = rawMsg.replace("{val}", Math.floor(Math.random() * 40 + 60).toString());
        
        // Assign targets to nearby particles
        const msg = stateRef.current.currentMessage;
        const nearby = particles
          .filter(p => Math.sqrt(Math.pow(p.x - m.x, 2) + Math.pow(p.y - m.y, 2)) < 250)
          .sort((a, b) => Math.random() - 0.5);

        for (let i = 0; i < msg.length; i++) {
          if (nearby[i]) {
            nearby[i].targetX = m.x - (msg.length * 3.5) + (i * 7);
            nearby[i].targetY = m.y;
            nearby[i].char = msg[i];
          }
        }
      }

      ctx.font = `200 ${fontSize - 2}px var(--font-mono)`;
      particles.forEach(p => {
        p.update(height, m.x, m.y, stateRef.current.isAssembling, 0.15); 
        
        if (p.targetX !== null) {
          ctx.fillStyle = "#FFBF00"; 
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 191, 0, 0.5)";
        } else if (p.isSpecial) {
          ctx.fillStyle = "rgba(75, 0, 130, 0.8)"; 
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `rgba(253, 253, 251, ${p.opacity * 0.7})`;
          ctx.shadowBlur = 0;
        }
        
        ctx.fillText(p.char, p.x, p.y);
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    init();
    draw();
    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded border border-porcelain/10 bg-ink shadow-polish lg:min-h-[560px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-label="Emotional Matrix visualization"
      />
      <div className="absolute inset-x-4 bottom-4 rounded border border-porcelain/10 bg-ink/60 p-3 text-porcelain backdrop-blur-md pointer-events-none">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["Tension", "Trust", "Engagement", "Intent"].map((item) => (
            <div key={item}>
              <div className="mb-1.5 h-1 rounded-full bg-porcelain/10 overflow-hidden">
                 <DynamicBar />
              </div>
              <p className="technical-label text-[9px] text-porcelain/50">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DynamicBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let width = Math.random() * 100;
    let targetWidth = Math.random() * 100;

    const animate = () => {
      if (Math.abs(width - targetWidth) < 1) {
        targetWidth = Math.random() * 100;
      }
      width += (targetWidth - width) * 0.05;
      if (barRef.current) {
        barRef.current.style.width = `${width}%`;
      }
      frame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div 
      ref={barRef} 
      className="h-full bg-[#B66B48] shadow-[0_0_8px_rgba(182,107,72,0.4)] transition-opacity duration-500" 
    />
  );
}