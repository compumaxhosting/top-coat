import Link from "next/link";

export default function TableOfContents() {
  const items = [
    { id: "terrazzo-contractors-wayne-nj", title: "Terrazzo Flooring Contractors in Wayne, NJ" },
    { id: "professional-terrazzo-installation", title: "Professional Terrazzo Flooring Installation" },
    { id: "what-is-terrazzo-flooring", title: "What Is Terrazzo Flooring?" },
    { id: "benefits-of-terrazzo-flooring", title: "Benefits of Terrazzo Flooring" },
    { id: "terrazzo-installation-process", title: "How the Terrazzo Installation Process Works" },
    { id: "why-choose-wayne-contractors", title: "Why Choose Our Wayne, NJ Terrazzo Contractors" },
    { id: "applications-of-terrazzo", title: "Applications for Terrazzo Flooring" },
    { id: "epoxy-vs-traditional-terrazzo", title: "Epoxy Terrazzo vs. Traditional Terrazzo" },
    { id: "why-wayne-chooses-terrazzo", title: "Why Property Owners Choose Terrazzo" },
    { id: "terrazzo-service-areas", title: "Service Areas" },
    { id: "terrazzo-faq", title: "Frequently Asked Questions" },
  ];

  return (
   <section className="pt-10 bg-[#14161A]">
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white/90 mb-6">
          Table of Contents
        </h2>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-white/70 hover:text-primary transition-colors text-md md:text-lg block"
              >
                <span className="text-primary/90 mr-2 font-mono">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}