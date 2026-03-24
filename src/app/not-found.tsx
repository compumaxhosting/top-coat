import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | TopCoat Artistry LLC",
  description:
    "The page you're looking for doesn't exist. Explore epoxy flooring, decorative concrete, terrazzo, and stamped concrete services in New Jersey.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
     <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#0D0F12] text-white/90">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <section className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          {/* ERROR */}
          <p className="mb-4 text-sm font-sans uppercase tracking-[0.35em] text-primary">
            Error 404
          </p>

          {/* HEADLINE */}
          <h1 className="text-5xl font-serif font-bold md:text-7xl">
            Page Not Found{" "}
            <span className="text-gradient-copper">in Our System</span>
          </h1>

          {/* SEO TEXT */}
          <p className="mt-6 max-w-2xl text-base font-sans text-white/70 md:text-lg">
            The page you’re looking for may have been moved or removed. But
            don’t worry — TopCoat Artistry LLC offers expert epoxy flooring,
            decorative concrete, terrazzo, and stamped concrete services across
            New Jersey.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Back To Homepage
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/20 px-7 py-3 font-sans text-sm font-medium text-white/90 transition hover:border-primary/60 hover:text-primary"
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-primary/30 px-7 py-3 font-sans text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Get Free Quote
            </Link>
          </div>

          {/* 🔥 QUICK LINKS (SEO GOLD) */}
          <div className="mt-12 text-sm text-white/60">
            <p className="mb-3 uppercase tracking-widest">Popular Services</p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services/epoxy-flooring"
                className="hover:text-primary"
              >
                Epoxy Flooring NJ
              </Link>
              <span>•</span>
              <Link
                href="/services/stamped-concrete"
                className="hover:text-primary"
              >
                Stamped Concrete
              </Link>
              <span>•</span>
              <Link
                href="/services/garage-floors"
                className="hover:text-primary"
              >
                Garage Floor Epoxy
              </Link>
              <span>•</span>
              <Link href="/services/terrazzo" className="hover:text-primary">
                Terrazzo Flooring
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
