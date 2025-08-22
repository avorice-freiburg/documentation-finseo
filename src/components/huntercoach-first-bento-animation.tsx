/* eslint-disable @next/next/no-img-element */
"use client";

import { Search, FileText, Link, Settings } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const optimizationAreas = [
  { 
    name: "Keywords?", 
    icon: Search
  },
  { 
    name: "Content?", 
    icon: FileText
  },
  { 
    name: "Technical?", 
    icon: Settings
  },
  { 
    name: "Backlinks?", 
    icon: Link
  }
];

export function HuntercoachFirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [areas, setAreas] = useState(optimizationAreas);
  const [focusedArea, setFocusedArea] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 500);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setFocusedArea(prev => (prev + 1) % areas.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shouldAnimate, areas.length]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-6 flex flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      
      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? 0 : -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">🤔</span>
          <h3 className="text-lg font-semibold text-foreground">Was solltest du tun?</h3>
        </div>
 
      </motion.div>

 

      {/* Optimization areas grid */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {areas.map((area, index) => {
          const IconComponent = area.icon;
          const isFocused = focusedArea === index;

          return (
            <motion.div
              key={area.name}
              className="bg-background border border-gray-200/20 rounded-lg p-4 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: shouldAnimate ? 1 : 0, 
                scale: shouldAnimate ? (isFocused ? 1.05 : 1) : 0.9,
                borderColor: shouldAnimate && isFocused ? "hsl(var(--primary))" : "rgba(156, 163, 175, 0.2)"
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Focused indicator */}
              {isFocused && shouldAnimate && (
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2">
                  <IconComponent className="size-5 text-muted-foreground" />
                  <span className="text-sm font-medium">{area.name}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom message */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldAnimate ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
 
      </motion.div>
    </div>
  );
} 