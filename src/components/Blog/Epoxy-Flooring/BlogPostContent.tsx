"use client";

import IntroSection from "./sections/IntroSection";
import DefinitionSection from "./sections/DefinitionSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import BenefitsSection from "./sections/BenefitsSection";
import SystemsSection from "./sections/SystemsSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import InvestmentSection from "./sections/InvestmentSection";
import ComparisonSection from "./sections/ComparisonSection";
import ProcessSection from "./sections/ProcessSection";
import MaintenanceSection from "./sections/MaintenanceSection";
import LocalContextSection from "./sections/LocalContextSection";
import ConclusionSection from "./sections/ConclusionSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

export default function BlogPostContent() {
	return (
		<article className="min-h-screen bg-charcoal text-secondary-foreground">
			<div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
				<div className="w-full pt-8">
					<IntroSection />
					<DefinitionSection />
					<WhyChooseSection />
					<BenefitsSection />
					<SystemsSection />
					<ApplicationsSection />
					<InvestmentSection />
					<ComparisonSection />
					<ProcessSection />
					<MaintenanceSection />
					<LocalContextSection />
					<ConclusionSection />
					<FAQSection />
					<CTASection />
				</div>
			</div>
		</article>
	);
}
