"use client";
import { Footer } from "@/components/landing-page/footer";
import { HeroSection } from "@/components/landing-page/hero-section";
import { MissionSection } from "@/components/landing-page/mission-section";
import { ProductSection } from "@/components/landing-page/product-section";
import { ScienceSection } from "@/components/landing-page/science-section";
import { TestimonialsSection } from "@/components/landing-page/testimonials-section";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Standards", link: "#standards" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-background text-foreground">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="tel:08145210122" variant="secondary" className="text-white hover:text-white/90">Call</NavbarButton>
            <NavbarButton href="https://wa.me/2348145210122" variant="primary">WhatsApp</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="tel:08145210122"
                onClick={() => setIsMobileMenuOpen(false)}
                // variant="primary"
                className="w-full text-white"
              >
                Call
              </NavbarButton>
              <NavbarButton
                href="https://wa.me/2348145210122"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                WhatsApp
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main>
        <HeroSection />
        <ProductSection />
        <ScienceSection />
        <TestimonialsSection />
        <MissionSection />
        <Footer />
      </main>
    </div>
  );
}
