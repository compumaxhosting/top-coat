import BenefitsSection from "./sections/BenefitsSection";
import CTASection from "./sections/CTASection";
import ConclusionSection from "./sections/ConclusionSection";
import CostFactorsSection from "./sections/CostFactorsSection";
import DefinitionSection from "./sections/DefinitionSection";
import FAQSection from "./sections/FAQSection";
import IntroSection from "./sections/IntroSection";
import MaintenanceSection from "./sections/MaintenanceSection";
import ProblemsSection from "./sections/ProblemsSection";
import ProcessSection from "./sections/ProcessSection";
import ProfessionalInstallationSection from "./sections/ProfessionalInstallationSection";
import WhyChooseSection from "./sections/WhyChooseSection";

export default function BlogPostContent() {
  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">
          <IntroSection />
          <DefinitionSection />
          <BenefitsSection />
          <ProcessSection />
          <ProblemsSection />
          <CostFactorsSection />
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
