"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

const boneImages = [
  { id: "tengkorak", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/tengkorak.png", name: "Tengkorak" },
  { id: "cervical", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/cervical.png", name: "Cervical" },
  { id: "vertebrae", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/vertebrae.png", name: "Vertebrae" },
  { id: "thoracal", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/thoracal.png", name: "Thoracal" },
  { id: "lumbal", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/lumbal.png", name: "Lumbal" },
  { id: "sacrum", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/sacrum.png", name: "Sacrum" },
  { id: "coccxy", src: "/images/hookQuizImages/tengkorak-dan-tulang-belakang/coccxy.png", name: "Coccyx" },
];

export default function HookQuiz() {
  const playBoneSound = (boneId: string) => {
    const audio = new Audio(`/audio/hookQuizSounds/1/${boneId}.m4a`);
    audio.play();
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/background_hookquiz.png" alt="Background Hook Quiz" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-8">
        {/* Main Layout - Flex Row */}
        <div className="flex items-center justify-center">
          {/* Left Side - Column Layout */}
          <div className="flex flex-col justify-center">
            {/* First Row: Tengkorak, Cervical, Thoracal */}
            <div className="flex justify-center gap-10">
              <button onClick={() => playBoneSound("tengkorak")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/tengkorak.png" alt="Tengkorak" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
              <button onClick={() => playBoneSound("cervical")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/cervical.png" alt="Cervical" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
              <button onClick={() => playBoneSound("thoracal")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/thoracal.png" alt="Thoracal" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
            </div>

            {/* Second Row: Lumbal, Sacrum, Coccxy */}
            <div className="flex justify-center pt-20 gap-10">
              <button onClick={() => playBoneSound("lumbal")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/lumbal.png" alt="Lumbal" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
              <button onClick={() => playBoneSound("sacrum")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/sacrum.png" alt="Sacrum" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
              <button onClick={() => playBoneSound("coccxy")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
                <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/coccxy.png" alt="Coccxy" width={180} height={180} className="w-40 h-40 object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </button>
            </div>
          </div>

          {/* Right Side - Vertebrae (Spine) */}
          <button onClick={() => playBoneSound("vertebrae")} className="hover:scale-110 hover:opacity-70 transition-all duration-300 cursor-pointer">
            <Image src="/images/hookQuizImages/tengkorak-dan-tulang-belakang/vertebrae.png" alt="Vertebrae" width={240} height={400} className="w-60 h-[400px] object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </button>
        </div>

        <Link href="/tengkorak-dan-tulang-belakang/quiz" className="absolute right-10 z-10 w-auto hover:opacity-70 transition-opacity">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium ml-1 mb-1 text-white">Next</p>
            <Image src="/images/next_button.png" alt="Next Button" width={100} height={100} placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </div>
        </Link>
      </div>
    </div>
  );
}
