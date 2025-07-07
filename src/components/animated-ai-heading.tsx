"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface AIModel {
  name: string;
  displayName: string;
  icon: string;
}

const aiModels: AIModel[] = [
  {
    name: "chatgpt",
    displayName: "ChatGPT",
    icon: "/chatgpt.png"
  },
  {
    name: "perplexity", 
    displayName: "Perplexity",
    icon: "/perplexity.png"
  },
  {
    name: "gemini",
    displayName: "Gemini", 
    icon: "/gemini.png"
  },
  {
    name: "google",
    displayName: "Google AIO",
    icon: "/google.webp"
  },
  {
    name: "claude",
    displayName: "Claude",
    icon: "/claude.png"
  },
  {
    name: "deepseek",
    displayName: "DeepSeek",
    icon: "/deepseek.png"
  }
];

export function AnimatedAIHeading() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => (prev + 1) % aiModels.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentModel = aiModels[currentModelIndex];
  
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
      <div>Control your AI Visibility in</div>
      <div className="mt-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentModel.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-flex items-center gap-3 text-secondary"
          >
            <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-lg shadow-sm border border-border">
              <Image
                src={currentModel.icon}
                alt={`${currentModel.displayName} icon`}
                width={32}
                height={32}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
              />
            </div>
            {currentModel.displayName}
          </motion.span>
        </AnimatePresence>
      </div>
    </h1>
  );
} 