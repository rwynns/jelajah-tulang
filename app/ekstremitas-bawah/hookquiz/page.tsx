"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

const boneImages = [
  { id: "phalang", src: "/images/hookQuizImages/ekstremitas-bawah/phalang.png", name: "Phalang" },
  { id: "fibula", src: "/images/hookQuizImages/ekstremitas-bawah/fibula.png", name: "Fibula" },
  { id: "tibia", src: "/images/hookQuizImages/ekstremitas-bawah/tibia.png", name: "Tibia" },
  { id: "femur", src: "/images/hookQuizImages/ekstremitas-bawah/femur.png", name: "Femur" },
  { id: "pelvis", src: "/images/hookQuizImages/ekstremitas-bawah/pelvis.png", name: "Pelvis" },
];

export default function HookQuiz() {
  const playBoneSound = (boneId: string) => {
    const audio = new Audio(`/audio/hookQuizSounds/3/${boneId}.m4a`);
    audio.play();
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/background_hookquiz.png" alt="Background Hook Quiz" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8">
        {/* Main Layout - Single Row with 5 bones */}
        <div className="flex items-center justify-center gap-8">
          {/* Phalang */}
          <button onClick={() => playBoneSound("phalang")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-bawah/phalang.png" alt="Phalang" width={200} height={200} className="w-50 h-50 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>

          {/* Fibula */}
          <button onClick={() => playBoneSound("fibula")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-bawah/fibula.png" alt="Fibula" width={200} height={200} className="w-50 h-50 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>

          {/* Tibia */}
          <button onClick={() => playBoneSound("tibia")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-bawah/tibia.png" alt="Tibia" width={200} height={200} className="w-50 h-50 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>

          {/* Femur */}
          <button onClick={() => playBoneSound("femur")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-bawah/femur.png" alt="Femur" width={200} height={200} className="w-50 h-50 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>

          {/* Pelvis */}
          <button onClick={() => playBoneSound("pelvis")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/ekstremitas-bawah/pelvis.png" alt="Pelvis" width={200} height={200} className="w-50 h-50 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>
        </div>

        <Link href="/ekstremitas-bawah/quiz" className="absolute right-10 z-10 w-auto hover:opacity-70 transition-opacity">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium ml-1 mb-1 text-white">Next</p>
            <Image src="/images/next_button.png" alt="Next Button" width={100} height={100} placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </div>
        </Link>
      </div>
    </div>
  );
}
