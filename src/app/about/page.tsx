import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { buttonVariants } from "@/Components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Discover more about Julia Ayers and her art.",
};

export default function About() {
  return (
    <main className="container">
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center max-w-screen-xl gap-14 pt-20 pb-60 m-auto">
        <div className="flex flex-col justify-center max-w-screen-md gap-10">
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-6xl flex flex-col gap-1">
            Julia Ayers
            <hr className="w-24 h-[3px] bg-black " />
            <span className="text-xl">Contemporary & Abstract Art</span>
          </h1>
          <div className="animate-slidein [--slidein-delay:500ms] opacity-0 text-[17px] flex flex-col gap-4">
            <p>
              Julia Ayers is a contemporary and abstract artist based in
              Hampshire, U.K. She creates vibrant and colourful paintings that
              are inspired by nature and the world around her.
            </p>
            <p>
              Her work is characterised by bold brush strokes, expressive
              colours, and a sense of movement. Julia&apos;s paintings have been
              shown in galleries across the U.K., including the Southampton City
              Art Gallery.
            </p>
          </div>
          <div className="animate-slidein [--slidein-delay:700ms] opacity-0 ">
            <Link
              className={buttonVariants({ variant: "ringHover" })}
              href="/enquiries"
            >
              Reserve a Painting
            </Link>
          </div>
        </div>
        <Image
          src="/images/aboutImage.webp"
          alt="About"
          width={500}
          height={396}
          className="w-full animate-slidein [--slidein-delay:900ms] opacity-0 "
        />
      </section>
    </main>
  );
}
