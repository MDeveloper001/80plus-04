import Image from "next/image";
import Link from "next/link";

export function DirectorCard({ image, name, position, role, link = "#" }) {
  return (
    <div className="relative bg-white px-8 pt-10 pb-16 text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden group hover:-translate-y-1.5">
      {/* IMAGE */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="object-cover rounded-full bg-gray-200"
        />
      </div>

      <h3 className="mt-5 text-[22px] font-bold text-primary-900 underline decoration-transparent underline-offset-4 transition-all duration-300 group-hover:decoration-primary-900">
        {name}
      </h3>

      <p className="text-sm text-[#004b8d] mt-1">{position}</p>

      <div className="w-[300px] h-[2px] bg-gray-300 mx-auto my-5"></div>

      {/* ROLE */}
      <p className="text-sm text-gray-700 leading-relaxed">{role}</p>

      <Link
        href={link}
        className="inline-block mt-6 text-sm font-semibold text-primary-900 hover:underline hover:text-[#002244] transition"
      >
        Read More
      </Link>

      <div className="absolute right-[-100px] bottom-[-100px] w-[200px] h-[200px] bg-[#2b8a9e] rotate-45 scale-90 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-[1]" />

      <div className="absolute right-5 bottom-4 w-[30px] h-[30px] rounded-full border border-white text-white flex items-center justify-center text-xl opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-[2]">
        →
      </div>
    </div>
  );
}
