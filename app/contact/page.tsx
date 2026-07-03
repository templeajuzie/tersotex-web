import Footer from "@/components/Footer";
import Header from "@/components/Header";

const whatsappUrl = "https://wa.me/2348145210122?text=Hello%20Terso%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="px-4 py-16 md:px-8">
        <section className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950">Get in touch with Terso</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Send enquiries and product requests through WhatsApp. We are available from 8:00 am to 5:00 pm.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <p><strong>Phone:</strong> 08145210122, 08109529429</p>
              <p><strong>Email:</strong> tersotex1930@gmail.com</p>
              <p><strong>Address:</strong> No 7 Erabor Close by Ilom Street, Port Harcourt</p>
              <p><strong>Hours:</strong> 8:00 am - 5:00 pm</p>
            </div>
            <a href={whatsappUrl} className="mt-8 inline-flex rounded-full bg-[#2636a7] px-7 py-3 text-sm font-medium text-white hover:bg-[#1f2c86]">
              Message on WhatsApp
            </a>
          </div>

          <form className="rounded-lg border border-slate-200 bg-slate-50 p-6" action={whatsappUrl}>
            <label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
            <input id="name" name="name" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#2636a7]" placeholder="Your name" />

            <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#2636a7]" placeholder="Your phone number" />

            <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#2636a7]" placeholder="What do you need?" />

            <button type="submit" className="mt-6 w-full rounded-full bg-[#2636a7] px-6 py-3 text-sm font-medium text-white hover:bg-[#1f2c86]">
              Continue to WhatsApp
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
