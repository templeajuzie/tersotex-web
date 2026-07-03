import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-sm text-slate-300 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex">
            <img src="/terso-logo.png" alt="Terso logo" className="h-14 w-32 object-contain" />
          </Link>
          <p className="mt-4 max-w-sm leading-6">
            Terso creates affordable hygiene products with safe practice and industrial standards in every production step.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-white">Company</h2>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/about">About</Link>
            <Link href="/services">Products</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <div className="mt-4 space-y-2 leading-6">
            <p>No 7 Erabor Close by Ilom Street, Port Harcourt</p>
            <p>8:00 am - 5:00 pm</p>
            <p>08145210122, 08109529429</p>
            <a href="mailto:tersotex1930@gmail.com">tersotex1930@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-center text-xs">
        Copyright 2026 Terso. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
