
import React, { useState, useEffect } from 'react';
import { ConfettiManager } from './components/ConfettiManager';

const App: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      duration: `${Math.random() * 3 + 3}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#050505]">
      {/* Confetti Engine */}
      <ConfettiManager />

      {/* Background Ambience */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.4)',
          } as React.CSSProperties}
        />
      ))}

      {/* Soft Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Greeting Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Top Tagline */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
          <h2 className="text-amber-200/80 font-cursive text-2xl md:text-4xl italic mb-6">
            New year, New Journey
          </h2>
        </div>
        
        {/* Main Title Block */}
        <div className="space-y-0 animate-in fade-in zoom-in duration-1000 delay-300">
          <h1 className="text-6xl md:text-[8rem] font-serif font-bold tracking-tight gold-gradient-text leading-[0.9] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            HAPPY
          </h1>
          <h1 className="text-6xl md:text-[8rem] font-serif font-bold tracking-tight gold-gradient-text leading-[0.9] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            NEW YEAR
          </h1>
        </div>

        {/* Year with decorative lines */}
        <div className="flex items-center gap-6 mt-8 animate-in fade-in delay-700 duration-1000">
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-amber-600/50" />
          <p className="text-amber-100/60 font-serif text-xl md:text-3xl tracking-[0.5em]">
            2026
          </p>
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-amber-600/50" />
        </div>
      </div>

      {/* Elegant Footer Details */}
      <div className="absolute bottom-16 flex flex-col items-center gap-4 animate-in fade-in duration-1000 delay-1000">
        <div className="w-8 h-[2px] bg-amber-600 mb-2" />
        <p className="text-slate-500 text-[10px] md:text-xs font-semibold tracking-[0.8em] uppercase text-center flex gap-4 md:gap-8">
          <span>Peace</span>
          <span className="text-amber-800">•</span>
          <span>Prosperity</span>
          <span className="text-amber-800">•</span>
          <span>Joy</span>
        </p>
      </div>

      {/* Elegant Inner Frame/Vignette */}
      <div className="absolute inset-0 pointer-events-none border-[20px] md:border-[60px] border-black/20 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
    </div>
  );
};

export default App;
