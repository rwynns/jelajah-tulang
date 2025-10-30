import Image from "next/image";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <Image src="/images/background_video.png" alt="Background" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-6"></div>

        {/* Loading Text */}
        <p className="text-white text-2xl font-bold">Memuat Quiz...</p>
        <p className="text-white/70 text-lg mt-2">Tunggu sebentar</p>
      </div>
    </div>
  );
}
