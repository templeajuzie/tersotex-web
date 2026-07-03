const Brands = () => {
  return (
    <section className="bg-slate-50 px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 text-center md:grid-cols-3">
        {["Cost-effective formulas", "Safe production practice", "Industrial standard procedures"].map((item) => (
          <div key={item} className="rounded-md border border-slate-200 bg-white px-4 py-5 text-sm font-medium text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
