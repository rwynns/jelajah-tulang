"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/Background Home.png" alt="Background Home" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      <Link href="/introduction" className="absolute top-[75%] left-[34%] -translate-x-1/2 -translate-y-1/2 hover:opacity-70 active:opacity-70 transition-opacity cursor-pointer">
        <Image src="/images/button_start.png" alt="Start Button" width={150} height={150} priority />
      </Link>
    </div>
  );
}
