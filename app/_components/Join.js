export function JoinPlus({
  title = "Join The 80Plus Team",
  description = "We are building a new generation of construction and infrastructure professionals.",
}) {
  return (
    <section className="relative bg-white px-6 sm:px-10 md:px-20 py-16 md:py-20 overflow-hidden">
      {/* DIAGONAL BACKGROUND */}
      <div className="hidden md:block absolute top-0 right-[-220px] w-[420px] h-full bg-gradient-to-br from-gray-200 to-blue-300 skew-x-[-20deg]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
          {title}
        </h2>

        <div className="w-full h-[1px] bg-accent-500 mb-6"></div>

        <p className="text-base leading-relaxed text-gray-800 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
