"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FileText, Edit, BarChart, Image, Mic } from 'lucide-react';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-[#0eca7b]/30 bg-[#151B22] p-3",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#0D1219]",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 px-8">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-[#0D1219] border-[#0eca7b]/40">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.content />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.pen />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.chart />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.image />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.mic />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0eca7b"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  openai: () => (
    <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
        id="Ebene_1"
        data-name="Ebene 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="50"
        height="50"
      >
        <path d="M183.29,46.46h-70.75v40.75h70.75v-40.75Z" style={{ fill: '#0eca7b' }} />
        <path d="M112.54,87.21h-40.43v40.75h40.43v-40.75Z" style={{ fill: '#0eca7b' }} />
        <path d="M72.11,209.47h40.43c0-28.15,22.62-50.95,50.54-50.95h20.21v-40.75h-20.21c-50.25.02-90.97,41.07-90.97,91.7Z" style={{ fill: '#0eca7b' }} />
      </svg>
    </div>
  ),
  content: () => <FileText size={24} color="#0eca7b" />,
  pen: () => <Edit size={24} color="#0eca7b" />,
  chart: () => <BarChart size={24} color="#0eca7b" />,
  image: () => <Image size={24} color="#0eca7b" />,
  mic: () => <Mic size={24} color="#0eca7b" />,
};

