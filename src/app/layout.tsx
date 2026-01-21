import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Collars 24hr Plumbing & HVAC | Charleston, SC",
  description: "Charleston's trusted 24/7 plumbing and HVAC service. Emergency repairs, water heater installation, AC service, and more. Licensed & insured. Call (843) 375-6680.",
  keywords: "plumbing, HVAC, Charleston, emergency plumber, air conditioning, heating, South Carolina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
