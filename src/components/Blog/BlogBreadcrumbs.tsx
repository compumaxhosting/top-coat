import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BlogBreadcrumbsProps {
	title: string;
}

export default function BlogBreadcrumbs({ title }: BlogBreadcrumbsProps) {
	return (
		<nav
			className="sticky top-20 z-40 border-y border-white/10 bg-[#0D0F12]/80 backdrop-blur-md md:top-24"
			aria-label="Breadcrumb"
		>
			<div className="container mx-auto px-4 py-2 sm:py-3">
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
					<Link
						href="/"
						className="shrink-0 text-white/60 transition-colors duration-200 hover:text-primary"
					>
						Home
					</Link>
					<ChevronRight size={14} className="shrink-0 text-white/30" />
					<Link
						href="/blog"
						className="shrink-0 text-white/60 transition-colors duration-200 hover:text-primary"
					>
						Blog
					</Link>
					<ChevronRight size={14} className="shrink-0 text-white/30" />
					<span className="w-full font-medium text-white sm:w-auto sm:truncate">
						{title}
					</span>
				</div>
			</div>
		</nav>
	);
}
