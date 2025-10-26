import { useEffect, useState } from 'react';
import { Code2, Zap, Palette, Cpu } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  const icons = [Code2, Zap, Palette, Cpu];

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />

      {/* Falling icons */}
      <div className="relative w-full h-full flex items-center justify-center">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-bounce"
            style={{
              left: `${25 + index * 20}%`,
              top: `${-50 + progress * 1.5}%`,
              animationDelay: `${index * 0.1}s`,
              opacity: Math.max(0, 1 - (progress - 50) / 50),
            }}
          >
            <Icon size={40} className="text-primary" />
          </div>
        ))}
      </div>

      {/* Loading text and progress */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Loading Portfolio
        </h1>
        <div className="w-64 h-1 bg-card rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-muted-foreground mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}

