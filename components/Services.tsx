const products = [
  {
    title: "Household Hygiene Products",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=900&auto=format&fit=crop",
    text: "Affordable cleaning essentials made for everyday Nigerian homes.",
  },
  {
    title: "Commercial Cleaning Supply",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=900&auto=format&fit=crop",
    text: "Reliable hygiene support for offices, shops, schools, and small facilities.",
  },
  {
    title: "Quality Production Process",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop",
    text: "Formulated with safe practice, consistency, and industrial standard procedures.",
  },
];

const ServicesSnipet = () => {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">Products</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Hygiene solutions built for daily use</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">No public pricing for now. Contact Terso for current availability and quotes.</p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-slate-200 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="border-b border-slate-200 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <img src={product.image} alt={product.title} className="h-56 w-full rounded-md object-cover" />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSnipet;
