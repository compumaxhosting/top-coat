import Link from "next/link";

export default function TableOfContents() {
    const items = [
        {
            title: "What Is Stamped Concrete? ",
            id:
                "one",
        },
        {
            title: "How Does Stamped Concrete Installation Work? ",
            id: "two",
        },
        {
            title: "Stamped Concrete Driveway, Patio & Walkway Ideas ",
            id: "three",
        },
        {
            title: "Benefits of Decorative Concrete ",
            id: "four",
        },
        {
            title: "Common Stamped Concrete Problems ",
            id: "five",
        },
        {
            title: "What Affects Stamped Concrete Cost? ",
            id: "six",
        },
        {
            title: "Why Professional Installation Matters ",
            id: "seven",
        },
        {
            title: "Stamped Concrete Maintenance Tips ",
            id: "eight",
        },
        {
            title: "Frequently Asked Questions ",
            id: "nine",
        },
        {
            title: "Stamped Concrete Services in NJ & NYC ",
            id: "ten",
        },
        {
            title: "Conclusion",
            id: "Conclusion",
        },
    ];

    return (
        <section className="bg-[#14161A] pt-10">
            <div className="mx-auto max-w-6xl px-4">
                <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
                    <h2 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">
                        Table of Contents
                    </h2>

                    <ul className="space-y-3">
                        {items.map((item, index) => (
                            <li key={item.id}>
                                <Link
                                    href={`#${item.id}`}
                                    className="block text-md text-white/70 transition-colors hover:text-primary md:text-lg"
                                >
                                    <span className="mr-2 font-mono text-primary/90">
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
