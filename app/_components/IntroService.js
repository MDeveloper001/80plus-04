export default function IntroService() {
  return (
    <section className="bg-[#f5f8fc] py-6 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div>
          <h2 className="flex items-center gap-3 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-primary-900 leading-tight">
            80PLUS International Limited is an integrated engineering and
            construction firm delivering complex infrastructure with technical
            precision, operational reliability, and disciplined accountability.
          </h2>
          <span className="block w-10 h-0.5 bg-accent-500 mt-3"></span>
        </div>
        <div className="space-y-3">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
            Through experienced leadership, skilled technical teams, and a deep
            understanding of local and regional project environments, we support
            infrastructure and industrial development that meets today’s needs
            while preparing for future growth.
          </p>
        </div>
      </div>
    </section>
  );
}
