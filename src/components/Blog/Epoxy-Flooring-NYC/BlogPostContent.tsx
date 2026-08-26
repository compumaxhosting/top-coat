"use client";

import IntroSection from "./sections/IntroSection";
import DefinitionSection from "./sections/DefinitionSection";
import ProcessSection from "./sections/ProcessSection";
import BenefitsSection from "./sections/BenefitsSection";
import GaragesAndCommercialSection from "./sections/GaragesAndCommercialSection";
import ChallengesSection from "./sections/ChallengesSection";
import CostSection from "./sections/CostSection";
import LifespanSection from "./sections/LifespanSection";
import ProfessionalInstallationSection from "./sections/ProfessionalInstallationSection";
import MaintenanceSection from "./sections/MaintenanceSection";
import FAQSection from "./sections/FAQSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import ConclusionSection from "./sections/ConclusionSection";
import CTASection from "./sections/CTASection";

export default function BlogPostContent() {
  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">
          <IntroSection />
          <DefinitionSection />
          <ProcessSection />
          <BenefitsSection />
          <GaragesAndCommercialSection />
          <ChallengesSection />
          <CostSection />
          <LifespanSection />
          <ProfessionalInstallationSection />
          <MaintenanceSection />
          <FAQSection />
          <WhyChooseSection />
          <ConclusionSection />
          <CTASection />
        </div>
      </div>
    </article>
  );
}
