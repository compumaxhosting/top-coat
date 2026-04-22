import Link from "next/link";
import Image from "next/image";

import type { BlogPost } from "@/Config/blog";

type BlogCardProps = {
	post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
	return (
		<Link href={`/blog/${post.slug}`} className="group block">
			<article className="overflow-hidden rounded-xl border border-[#282c33] bg-[#14161A] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/30 group-hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.85)]">
				<div className="relative h-60 overflow-hidden">
					<Image
						src={post.image}
						alt={post.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
						className="object-cover transition-transform duration-700 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-[#0D0F12]/95 via-[#0D0F12]/40 to-transparent" />
					<div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/85 backdrop-blur-sm">
						{post.category}
					</div>
				</div>

				<div className="p-6">
					<h3 className="mb-3 font-serif text-xl font-bold leading-snug text-white/95 transition-colors group-hover:text-white md:text-2xl">
						{post.title}
					</h3>
					<p className="mb-5 line-clamp-3 text-sm leading-relaxed text-white/70 md:text-base">
						{post.excerpt}
					</p>

					<div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60 md:text-sm">
						<div>
							<span>{post.date}</span>
							<span className="mx-2">•</span>
							<span>{post.readTime}</span>
						</div>
						<span className="font-medium text-primary/90 transition-colors group-hover:text-primary">
							Read article {"->"}
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
