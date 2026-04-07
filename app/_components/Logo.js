import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Titillium_Web } from "next/font/google";

const Titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 z-10">
      <Image
        src={logo}
        className="rounded-full"
        width={60}
        height={60}
        alt="80plus+"
      />

      <h1
        className={`${Titillium.className} block md:hidden text-lg font-bold tracking-wide text-primary-900 transition-all duration-300 group-hover:scale-105`}
      >
        80PLUS
      </h1>
    </Link>
  );
}
