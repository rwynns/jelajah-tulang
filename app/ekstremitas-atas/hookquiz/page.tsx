"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

const boneImages = [
  { id: "clavicula", src: "/images/hookQuizImages/ekstremitas-atas/clavicula.png", name: "Clavicula" },
  { id: "scapula", src: "/images/hookQuizImages/ekstremitas-atas/scapula.png", name: "Scapula" },
  { id: "humerus", src: "/images/hookQuizImages/ekstremitas-atas/humerus.png", name: "Humerus" },
  { id: "radius", src: "/images/hookQuizImages/ekstremitas-atas/radius.png", name: "Radius" },
  { id: "ulna", src: "/images/hookQuizImages/ekstremitas-atas/ulna.png", name: "Ulna" },
  { id: "wrist", src: "/images/hookQuizImages/ekstremitas-atas/wrist.png", name: "Wrist" },
];

export default function HookQuiz() {
  const playBoneSound = (boneId: string) => {
    const audio = new Audio(`/audio/hookQuizSounds/2/${boneId}.m4a`);
    audio.play();
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/background_hookquiz.png" alt="Background Hook Quiz" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8">
        {/* Main Layout - 5 Columns */}
        <div className="flex items-center justify-center">
          {/* Column 1: Clavicula (top) and Wrist (bottom) */}
          <div className="flex flex-col gap-8">
            <button onClick={() => playBoneSound("clavicula")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
              <Image src="/images/hookQuizImages/ekstremitas-atas/clavicula.png" alt="Clavicula" width={200} height={200} className="w-50 h-50 object-contain" priority />
            </button>
            <button onClick={() => playBoneSound("wrist")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
              <Image src="/images/hookQuizImages/ekstremitas-atas/wrist.png" alt="Wrist" width={200} height={200} className="w-50 h-50 object-contain" priority />
            </button>
          </div>

          {/* Column 2: Humerus */}
          <button onClick={() => playBoneSound("humerus")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-atas/humerus.png" alt="Humerus" width={200} height={200} className="w-50 h-50 object-contain" priority />
          </button>

          {/* Column 3: Scapula */}
          <button onClick={() => playBoneSound("scapula")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-atas/scapula.png" alt="Scapula" width={200} height={200} className="w-50 h-50 object-contain" priority />
          </button>

          {/* Column 4: Radius */}
          <button onClick={() => playBoneSound("radius")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-atas/radius.png" alt="Radius" width={200} height={200} className="w-50 h-50 object-contain" priority />
          </button>

          {/* Column 5: Ulna */}
          <button onClick={() => playBoneSound("ulna")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-atas/ulna.png" alt="Ulna" width={200} height={200} className="w-50 h-50 object-contain" priority />
          </button>
        </div>

        <Link href="/ekstremitas-atas/quiz" className="absolute right-10 z-10 w-auto hover:opacity-70 transition-opacity">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium ml-1 mb-1 text-white">Next</p>
            <Image src="/images/next_button.png" alt="Next Button" width={100} height={100} priority />
          </div>
        </Link>
      </div>
    </div>
  );
}
