const values = [
  ["Mission", "Ensuring maximum perfection in every step."],
  ["Vision", "To build trust, ensure safe practice in every production, and maintain industrial standard procedures."],
  ["Contact", "WhatsApp 08145210122 for product enquiries and orders."],
];

const Testimonials = () => {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {values.map(([title, text]) => (
          <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
