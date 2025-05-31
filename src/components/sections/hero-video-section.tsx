import Image from "next/image";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <Image 
          src="/finseo-dashboard.png" 
          alt="Finseo Dashboard" 
          width={1920} 
          height={1080}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
