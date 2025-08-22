import Image from "next/image";
import Link from "next/link";

const aiModels = [
  { name: "ChatGPT", icon: "/chatgpt.png" },
  { name: "Perplexity", icon: "/perplexity.png" },
  { name: "Gemini", icon: "/gemini.png" },
  { name: "Google AIO", icon: "/google.webp" },
  { name: "Claude", icon: "/claude.png" },
  { name: "DeepSeek", icon: "/deepseek.png" }
];

export function HuntercoachCTASection() {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-[350px] md:h-[350px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
          <Image
            src="/agent-cta-background.png"
            alt="Agent CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            fill
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-8 text-center">
            <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl mb-4">
              Verbessere deine KI-Sichtbarkeit
            </h1>
            
            {/* AI Model Icons */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {aiModels.map((model, index) => (
                <div
                  key={model.name}
                  className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border border-white/20 p-1"
                >
                  <Image
                    src={model.icon}
                    alt={model.name}
                    width={20}
                    height={20}
                    className="rounded-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                href="https://app.finseo.ai/signup"
                className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
              >
                Jetzt starten
              </Link>
              <span className="text-white text-sm">Überwache & optimiere auf allen KI-Plattformen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 