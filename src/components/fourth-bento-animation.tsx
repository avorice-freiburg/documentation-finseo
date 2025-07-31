"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TrendingDown } from "lucide-react";

interface BoxConfig {
  title: string;
  className: string;
  decline: string;
}

const boxConfigs: BoxConfig[] = [
  {
    title: "Search CTR",
    className: "bg-red-500 text-white",
    decline: "-43%"
  },
  {
    title: "Organic Clicks", 
    className: "bg-red-400 text-white",
    decline: "-42%"
  },
  {
    title: "Page Visibility",
    className: "bg-red-300 text-white",
    decline: "-52%"
  },
];

interface FourthBentoAnimationProps {
  startAnimationDelay?: number;
  once?: boolean;
}

export function FourthBentoAnimation({
  once = false,
  startAnimationDelay = 0,
}: FourthBentoAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once });
  const [translateXValues, setTranslateXValues] = useState<number[]>([]);

  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, {
    damping: 50,
    stiffness: 400,
  });

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
    }
  }, [mouseX]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const adjustedX = e.clientX - rect.left + 100;
      mouseX.set(adjustedX);
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        const itemWidth = 250;
        const numberOfItems = 3;
        const totalItemsWidth = itemWidth * numberOfItems;
        const availableSpace = containerWidth - totalItemsWidth;
        const gap = availableSpace / (numberOfItems - 1);

        const newTranslateXValues = Array.from(
          { length: numberOfItems },
          (_, index) => {
            return ((itemWidth + gap) * index) / 2;
          },
        );
        setTranslateXValues(newTranslateXValues);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex -z-10 [mask:linear-gradient(180deg,transparent,black_40%,black_40%,transparent)] ">
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-red-200/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-red-200/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent "
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-red-200/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className=" w-1/2 h-full flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
        <div className="w-1/2 h-full border-x border-red-200/70 border-dashed flex items-start justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-px h-5 bg-red-400 first:bg-transparent"
            ></div>
          ))}
        </div>
      </div>

      {/* Time periods */}
      <div className="absolute top-4 left-0 right-0 flex justify-between max-w-md mx-auto px-8 text-sm text-gray-500">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
      </div>

      <motion.div
        className="absolute top-10 w-[2px] h-[calc(100%-80px)] bg-gradient-to-b from-red-500 to-transparent z-10"
        style={{
          x: smoothX,
          translateX: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          default: { duration: 0 }, // Makes position update instant
        }}
      />
      <motion.div
        className="absolute top-14 bg-red-500 h-6 z-20 flex items-center justify-center text-xs p-2 rounded-md shadow-lg"
        style={{
          x: smoothX,
          translateX: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          default: { duration: 0 }, // Makes position update instant
        }}
      >
        <div className="flex items-center gap-1 text-white">
          <TrendingDown className="size-3" />
          <span>Loosing Visibility</span>
        </div>
      </motion.div>

      <div
        className="w-full absolute grid gap-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/3"
        ref={containerRef}
      >
        <AnimatePresence>
          {translateXValues.map((translateX, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -50
                    : containerRef.current?.getBoundingClientRect().width || 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: translateX,
                    }
                  : {
                      opacity: 0,
                      x:
                        index % 2 === 0
                          ? -50
                          : containerRef.current?.getBoundingClientRect()
                              .width || 0,
                    }
              }
              exit={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                duration: 0.3,
                delay: startAnimationDelay + index * 0.2,
              }}
              className={`flex items-center h-8 justify-between gap-3 rounded-lg w-[250px] p-3 shadow-lg ${boxConfigs[index].className}`}
            >
              <p className="font-medium text-sm">{boxConfigs[index].title}</p>
              <span className="font-bold text-sm">{boxConfigs[index].decline}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
