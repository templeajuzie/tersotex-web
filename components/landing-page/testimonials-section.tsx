"use client"

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { ScrollBlurText } from "./scroll-blur-text"

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "08145210122, 08109529429",
    href: "tel:08145210122",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tersotex1930@gmail.com",
    href: "mailto:tersotex1930@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send messages to 08145210122",
    href: "https://wa.me/2348145210122",
  },
  {
    icon: Clock,
    label: "Business hours",
    value: "8:00 am - 5:00 pm",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "No 7 Erabor Close by Ilom Street, Port Harcourt",
  },
]

export function TestimonialsSection() {
  return (
    <section id="contact" className="py-24 bg-background overflow-hidden lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Contact
          </p>
          <ScrollBlurText
            text="Talk to Terso"
            className="font-serif text-3xl md:text-4xl text-foreground text-balance lg:text-7xl font-light"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6">
            For product enquiries, service details, or messages from the site, reach Terso on WhatsApp or by phone.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const content = (
              <div className="h-full rounded-2xl border border-border/50 bg-card p-6 shadow-lg shadow-primary/5 transition hover:shadow-xl hover:shadow-primary/10">
                <item.icon className="w-5 h-5 text-primary mb-5" />
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg font-medium text-foreground leading-relaxed">{item.value}</p>
              </div>
            )

            return item.href ? (
              <a key={item.label} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
