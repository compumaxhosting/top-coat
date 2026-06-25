import Link from "next/link";

export default function TableOfContents() {
  const items = [
    { id: "building-facade-contractors", title: "Building Facade Contractors Wayne NJ" },
    { id: "trusted-facade-contractors", title: "Trusted Building Facade Contractors in Wayne NJ" },
    { id: "what-is-facade-restoration", title: "What Is Building Facade Restoration?" },
    { id: "how-facade-systems-work", title: "How Building Facade Systems Work" },
    { id: "building-facade-services", title: "Building Facade Services in Wayne NJ" },
    { id: "facade-waterproofing", title: "Facade Waterproofing Wayne NJ" },
    { id: "commercial-masonry-restoration", title: "Commercial Masonry Restoration Wayne NJ" },
    { id: "facade-inspection", title: "Building Facade Inspection Wayne NJ" },
    { id: "structural-facade-repair", title: "Structural Facade Repair Wayne NJ" },
    { id: "restoration-process", title: "Step-by-Step Facade Restoration Process" },
    { id: "benefits-of-restoration", title: "Benefits of Professional Facade Restoration" },
    { id: "service-areas", title: "Service Areas Throughout North Jersey" },
    { id: "why-choose-topcoat", title: "Why Choose Topcoat LLC for Building Facade Restoration?" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <section className="pt-10 bg-[#14161A]">
      <div className="max-w-6xl mx-auto px-4">
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