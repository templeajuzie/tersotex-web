import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { companyName, contact } from "@/lib/contact"

const footerLinks = {
  services: [
    { label: "Hygiene products", href: "/#services" },
    { label: "Safe production", href: "/#standards" },
    { label: "Quality formulation", href: "/#services" },
  ],
  company: [
    { label: "Our story", href: "/#about" },
    { label: "Mission", href: "/#about" },
    { label: "Standards", href: "/#standards" },
  ],
  contact: [
    { label: "WhatsApp", href: contact.whatsappUrl },
    { label: "Call", href: contact.phoneHref },
    { label: "Email", href: `mailto:${contact.email}` },
    ...contact.socials,
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/terso-logo.png" alt="Terso logo" className="h-30 w-auto object-cover" />
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Ensuring process in every step through affordable hygiene products and safe production practice.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>No 7 Erabor Close by Ilom Street, Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2026 {companyName}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Legal notice
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of sale
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
