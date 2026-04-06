import Image from "next/image";

export default function DirectorDetail({
  name,
  title,
  roles = [],
  image,
  bio = [],
}) {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            {name}
          </h1>

          <p className="text-accent-500 font-semibold">{title}</p>

          <div className="mt-3 space-y-1 text-[#0076b6] font-medium">
            {roles.map((role, i) => (
              <p key={i}>{role}</p>
            ))}
          </div>
          <div className="w-full h-[1px] bg-blue-100 my-6"></div>
          <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            {bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto md:ml-auto z-10">
            <Image
              src={image}
              alt={name}
              width={400}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* DIAGONAL BACKGROUND (refined) */}
          <div className="hidden md:block absolute right-[-60px] top-0 w-[420px] h-[420px] bg-primary-200 clip-diagonal z-[1]" />
        </div>
      </div>
    </section>
  );
}
