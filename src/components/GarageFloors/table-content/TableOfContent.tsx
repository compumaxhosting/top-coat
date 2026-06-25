import Link from "next/link";

export default function TableOfContents() {
  const items = [
    { id: "what-is-epoxy-flooring", title: "Professional Garage Floor Coating Contractors in Wayne, NJ" },
    { id: "how-epoxy-flooring-works", title: "What Is Garage Floor Coating?" },
    { id: "how-our-process-works", title: "How Our Garage Floor Coating Process Works" },
    { id: "epoxy-vs-polyaspartic", title: "Epoxy vs. Polyaspartic Garage Floor Coatings" },
    { id: "types-of-epoxy-flooring-services", title: "Our Custom Flooring Services" },
    { id: "benefits-of-epoxy-flooring", title: "Benefits of Professional Garage Floor Coatings" },
    { id: "why-professional-installation", title: "Why Choose TopCoat Artistry LLC?" },
    { id: "applications-of-epoxy-flooring", title: "How to Choose the Right Garage Floor Coating" },
    { id: "epoxy-flooring-cost", title: "Request a Free Garage Floor Coating Estimate" },
    { id: "maintenance-tips", title: "Areas We Serve" },
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