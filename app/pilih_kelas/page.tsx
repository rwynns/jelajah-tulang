"use client";

import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

const books = [
  {
    id: 1,
    slug: "tengkorak-dan-tulang-belakang",
    thumbnail: "audiobook1.png",
    title: "Tengkorak dan Tulang Belakang",
  },
  {
    id: 2,
    slug: "ekstremitas-atas",
    thumbnail: "audiobook2.png",
    title: "Ekstremitas Atas",
  },
  {
    id: 3,
    slug: "ekstremitas-bawah",
    thumbnail: "audiobook3.png",
    title: "Ekstremitas Bawah",
  },
];

export default function PilihKelas() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <Image src="/images/background_pilih_kelas.png" alt="Background Pilih Kelas" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      <div className="relative z-10 flex justify-center pt-40 gap-5">
        {books.map((book, i) => (
          <Link href={`/${book.slug}`} key={i} className="hover:opacity-70 active:opacity-70 transition-opacity">
            <Image src={`/images/${book.thumbnail}`} alt={book.title} width={320} height={320} className="w-80 h-80" priority />
          </Link>
        ))}
      </div>
    </div>
  );
}
