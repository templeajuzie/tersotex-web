import type { Metadata } from "next";
import { WhatsAppFloatingAction } from "@/components/whatsapp-floating-action";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terso",
  description: "Ensuring process in every step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloatingAction />
      </body>
    </html>
  );
}
