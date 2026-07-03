import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <main className="px-4 py-16 md:px-8">
        <section className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
            alt="Clean workspace"
            className="h-[420px] w-full rounded-lg object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">About Terso</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950">Founded by Uche Amazu in November 2023</h1>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Terso was founded solely by Uche Amazu after realising hygiene issues required a practical solution to reduce dirtiness. Her solution was to create a quality product that fits into the changing Nigerian hygiene ecosystem.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              She developed a formula at a cost-effective rate that customers can afford and use effectively. Terso remains a passion project set out to combat the Nigerian hygiene difficulties that affect our nation and its locals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
