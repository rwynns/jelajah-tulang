"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

export default function Introduction() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <audio id="backsong" preload="auto" loop autoPlay src="/audio/backsong_introduction.mp3"></audio>
      <Image src="/images/background_introduction.png" alt="Background Introduction" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      <div className="w-[35%] absolute top-[30%] right-[4%] z-10">
        <TypeAnimation
          sequence={[
            "Selamat datang di platform online yang mengagumkan, Jelajah Tulang! Dengan bangga kami mempersembahkan sebuah perjalanan interaktif menyenangkan ke dalam struktur fungsi, dan keajaiban tubuh manusia, dengan fokus pada tulang. Jelajahi keajaiban dunia tulang manusia bersama kami di Jelajah Tulang. Mari kita mulai perjalanan edukatif yang memukau ini bersama-sama! Selamat Menjelajah!!!",
            1000,
            "Tau kah kamu bahwa badan kita dapat berdiri tegak bukan tanpa alasan loh hal ini dikarenakan ada sesuatu yang menopang atau disebut dengan tulang, didalam tulang terdiri dari banyak bagian loh ada spons tulang, tulang kompak, pembuluh darah, sumsum tulang dan perioseteum,eummm cukup menarik ya… kira kira di dalam tubuh kita ada tulang apa aja ya ? yok mulai jelajah tulang bersama ku",
            1000,
          ]}
          speed={50}
          style={{
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "#6836B4",
            borderRadius: "9999px",
          }}
          repeat={Infinity}
        />
      </div>

      <Link href="/pilih_kelas" className="absolute bottom-20 right-10 z-10 w-auto hover:opacity-70 transition-opacity">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-medium ml-1 mb-1 text-[#6836B4]">Next</p>
          <Image src="/images/next_button.png" alt="Next Button" width={100} height={100} priority />
        </div>
      </Link>
    </div>
  );
}
