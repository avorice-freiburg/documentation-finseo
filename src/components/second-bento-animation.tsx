import { Icons } from "@/components/icons";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { HelpCircle } from "lucide-react";
import Image from "next/image";

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <HelpCircle className="size-10 text-black" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/chatgpt.png" alt="ChatGPT" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/claude.png" alt="Claude" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/perplexity.png" alt="Perplexity" className="size-full object-contain" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/google.webp" alt="Gemini" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/deepseek.png" alt="DeepSeek" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/gemini.png" alt="Gemini" className="size-full object-contain" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/chatgpt.png" alt="ChatGPT" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/google.webp" alt="Claude" className="size-full object-contain" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 size-14">
              <img src="/gemini.png" alt="Gemini" className="size-full object-contain" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
