import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSnipet from "@/components/Services";

const Services = () => {
  return (
    <div>
      <Header />
      <main className="py-12">
        <section className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">Products and services</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950">Affordable hygiene support for homes and businesses</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Terso supplies quality hygiene products and practical cleaning support. Pricing is not public yet, so contact us for current availability and quotes.
          </p>
        </section>
        <ServicesSnipet />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
