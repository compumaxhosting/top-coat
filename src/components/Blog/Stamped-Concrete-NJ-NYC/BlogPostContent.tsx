import BenefitsSection from "./sections/BenefitsSection";
import CTASection from "./sections/CTASection";
import ConclusionSection from "./sections/ConclusionSection";
import CostFactorsSection from "./sections/CostFactorsSection";
import DefinitionSection from "./sections/DefinitionSection";
import FAQSection from "./sections/FAQSection";
import IdeasSection from "./sections/IdeasSection";
import IntroSection from "./sections/IntroSection";
import MaintenanceSection from "./sections/MaintenanceSection";
import ProblemsSection from "./sections/ProblemsSection";
import ProcessSection from "./sections/ProcessSection";
import ProfessionalInstallationSection from "./sections/ProfessionalInstallationSection";
import ServicesSection from "./sections/ServicesSection";

export default function BlogPostContent() {
  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">
          <IntroSection />
          <DefinitionSection />
          <ProcessSection />
          <IdeasSection />
          <BenefitsSection />
          <ProblemsSection />
          <CostFactorsSection />
          <ProfessionalInstallationSection />
          <MaintenanceSection />
          <FAQSection />
          <ServicesSection />
          <ConclusionSection />
          <CTASection />
        </div>
      </div>
    </article>
  );
}
