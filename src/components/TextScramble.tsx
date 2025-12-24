import { useEffect, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const TextScramble = ({ text, className = '', delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let iteration = 0;
    const maxIterations = text.length;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return char;
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iteration += 1 / 3;

        if (iteration >= maxIterations) {
          setDisplayText(text);
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className={`${className} ${isComplete ? '' : 'opacity-90'}`}>
      {displayText || text.split('').map(() => chars[0]).join('')}
    </span>
  );
};
