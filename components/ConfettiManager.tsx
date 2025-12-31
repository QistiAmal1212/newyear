
import React, { useCallback, useEffect } from 'react';
import confetti from 'canvas-confetti';

export const ConfettiManager: React.FC = () => {
  const fireFireworks = useCallback(() => {
    const duration = 20 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 120, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        fireFireworks(); // Loop
        return clearInterval(interval);
      }

      const particleCount = 25 * (timeLeft / duration);
      
      // Elegant gold and white palette
      const colors = ['#D4AF37', '#FDE68A', '#FFFFFF', '#FFF8E1'];

      // Side bursts (simulating gentle drifting sparklers)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.2), y: Math.random() - 0.1 },
        colors,
        gravity: 0.6,
        scalar: 0.8
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.8, 0.9), y: Math.random() - 0.1 },
        colors,
        gravity: 0.6,
        scalar: 0.8
      });

      // Subtle center bursts every few seconds
      if (Math.random() > 0.9) {
        confetti({
          particleCount: 40,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFFFFF'],
          gravity: 0.5,
          scalar: 1.1
        });
      }
    }, 800);
  }, []);

  useEffect(() => {
    // Initial entrance burst
    const initialDelay = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FDE68A', '#FFFFFF'],
        gravity: 0.8,
        scalar: 1.2
      });
      
      fireFireworks();
    }, 1500);

    return () => clearTimeout(initialDelay);
  }, [fireFireworks]);

  return null;
};
