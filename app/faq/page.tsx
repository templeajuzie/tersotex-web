"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const faqsData = [
  ["What does Terso do?", "Terso creates affordable hygiene products for Nigerian homes and businesses."],
  ["Is pricing public?", "No. Pricing is not public for now. Contact Terso directly for current product availability and quotes."],
  ["How do I contact Terso?", "Send a WhatsApp message to 08145210122 or call 08109529429."],
  ["Where is Terso located?", "No 7 Erabor Close by Ilom Street, Port Harcourt."],
  ["What are the business hours?", "Terso is open from 8:00 am to 5:00 pm."],
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div>
      <Header />
      <main className="px-4 py-16 md:px-8">
        <section className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2636a7]">FAQ</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950">Frequently Asked Questions</h1>
          <div className="mt-8 flex flex-col gap-4 text-left">
            {faqsData.map(([question, answer], index) => (
              <div key={question} className="rounded-md border border-slate-200">
                <button
                  className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-slate-900"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  type="button"
                >
                  {question}
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && <p className="px-4 pb-4 text-sm leading-6 text-slate-600">{answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
