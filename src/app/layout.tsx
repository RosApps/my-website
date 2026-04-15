import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { person } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { FloatingLinkedIn } from "@/components/FloatingLinkedIn";
import { PageTransitions } from "@/components/layout/PageTransitions";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const description =
  "MBA Candidate. Consultant. Coach. Health sciences foundation, operational consulting experience, and eleven seasons of competitive football coaching.";

export const metadata: Metadata = {
  title: {
    default: person.name,
    template: `%s · ${person.name}`,
  },
  description,
  openGraph: {
    title: person.name,
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-charcoal text-ivory font-sans antialiased text-base">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <PageTransitions>{children}</PageTransitions>
        </main>
        <FloatingLinkedIn />
      </body>
    </html>
  );
}
