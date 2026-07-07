"use client"

import { useState } from "react"
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar"

const navItems = [
  { name: "Products", link: "/#services" },
  { name: "Standards", link: "/#standards" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
]

export function ProductPageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton href="tel:08145210122" variant="secondary">
            Call
          </NavbarButton>
          <NavbarButton href="https://wa.me/2348145210122" variant="primary">
            WhatsApp
          </NavbarButton>
        </div>
      </NavBody>

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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              href="tel:08145210122"
              onClick={() => setIsMobileMenuOpen(false)}
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
  )
}
