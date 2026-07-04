"use client"

import { useState } from "react"
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
} from "@/components/ui/resizable-navbar"

export function Header() {
  const navItems = [
    { name: "Products", link: "#produits" },
    { name: "Science", link: "#science" },
    { name: "Testimonials", link: "#temoignages" },
    { name: "Our Mission", link: "#mission" },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Discover</NavbarButton>
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
              className="text-neutral-300 hover:text-white transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full justify-center"
            >
              Login
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full justify-center"
            >
              Discover
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
