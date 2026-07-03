import Link from "next/link";

export default function LearnMore() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-lg bg-[#eaf7fb] p-6 md:grid-cols-2 md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">Founded November 2023</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">A Nigerian hygiene passion project by Uche Amazu</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Terso was founded solely by Uche Amazu after noticing hygiene issues that needed a practical solution to reduce dirtiness. She created an affordable formula customers can use effectively as the Nigerian hygiene ecosystem continues to improve.
          </p>
          <Link href="/about" className="mt-6 inline-flex rounded-full bg-[#2636a7] px-6 py-3 text-sm font-medium text-white">
            Learn more
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
          alt="Clean work surface"
          className="h-80 w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
}
