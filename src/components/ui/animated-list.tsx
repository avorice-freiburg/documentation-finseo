"use client";

import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 2000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray],
    );

    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item, i) => (
            <AnimatedListItem key={(item as ReactElement).key} index={i}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children, index }: { children: React.ReactNode; index: number }) {
  const animations = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 350, 
        damping: 25, 
        delay: index * 0.1 
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.div
      {...animations}
      layout
      className="mx-auto w-full max-w-xs bg-[#151B22] border border-[#0eca7b]/10 hover:border-[#0eca7b]/30 p-4 rounded-lg text-white transition-all duration-300"
      whileHover={{ 
        scale: 1.03, 
        transition: { duration: 0.2 } 
      }}
    >
      {children}
    </motion.div>
  );
}
