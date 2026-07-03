const images = [
  ["https://images.unsplash.com/photo-1624377632657-3902bfd35958?q=80&w=900&auto=format&fit=crop", "Cleaning products on a shelf"],
  ["https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=900&auto=format&fit=crop", "Cleaning tools and supplies"],
  ["https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=900&auto=format&fit=crop", "Sanitizing a surface"],
];

export default function GallerySnippet() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-semibold text-slate-950">Product and hygiene focus</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-slate-600">
          Practical hygiene products and clean production habits for everyday Nigerian use.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {images.map(([src, alt]) => (
            <img key={src} src={src} alt={alt} className="h-72 w-full rounded-md object-cover" />
          ))}
        </div>
      </div>
    </section>
  );
}
