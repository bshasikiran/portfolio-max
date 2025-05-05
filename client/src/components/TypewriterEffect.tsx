import { useState, useEffect, useRef } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypewriterEffect({
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 1000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      let speed = typingSpeed;

      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        speed = deletingSpeed;
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        // Word is complete, pause and then start deleting
        speed = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        // Deletion complete, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        speed = 500; // Pause before starting new word
      }

      timeoutRef.current = window.setTimeout(type, speed);
    };

    timeoutRef.current = window.setTimeout(type, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, wordIndex, isDeleting, displayText, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="inline">
      <span>{displayText}</span>
      <span
        className="inline-block w-[2px] h-5 bg-current ml-1 animate-[blink_1s_infinite]"
        style={{
          animation: "blink 1s infinite",
        }}
      ></span>
    </div>
  );
}

// Add keyframes to the global CSS in index.css
