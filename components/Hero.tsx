import Link from "next/link";

const Hero = () => {
  return (
    <main className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">
            Terso Hygiene Products
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            Ensuring maximum perfection in every step.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Terso creates quality, cost-effective hygiene products for Nigerian homes and businesses, with safe production practices and industrial standards at the center of every batch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[#2636a7] px-7 py-3 text-center text-sm font-medium text-white hover:bg-[#1f2c86]">
              Chat on WhatsApp
            </Link>
            <Link href="/about" className="rounded-full border border-slate-300 px-7 py-3 text-center text-sm font-medium text-slate-800 hover:bg-slate-50">
              Our Story
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop"
            alt="Clean hygiene product bottles"
            className="h-[360px] w-full object-cover md:h-[520px]"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 text-sm text-slate-700 shadow">
            <strong className="block text-slate-950">Open 8:00 am - 5:00 pm</strong>
            No 7 Erabor Close by Ilom Street, Port Harcourt
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
