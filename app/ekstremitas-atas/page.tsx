"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

export default function EkstremitasAtas() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/background_video.png" alt="Background" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      {/* Video Player */}
      <div className="relative z-10 w-full max-w-5xl px-8">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/_y-p9fXTpK0?autoplay=1&mute=1"
            title="Video Pembelajaran Ekstremitas Atas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Back Button */}
      <Link href="/pilih_kelas" className="absolute bottom-20 left-10 z-10 w-auto hover:opacity-70 transition-opacity">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-medium ml-1 mb-1 text-white">Back</p>
          <Image src="/images/back_button.png" alt="Back Button" width={100} height={100} placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
        </div>
      </Link>

      {/* Next Button */}
      <Link href="/ekstremitas-atas/hookquiz" className="absolute bottom-20 right-10 z-10 w-auto hover:opacity-70 transition-opacity">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-medium ml-1 mb-1 text-white">Next</p>
          <Image src="/images/next_button.png" alt="Next Button" width={100} height={100} placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
        </div>
      </Link>
    </div>
  );
}
