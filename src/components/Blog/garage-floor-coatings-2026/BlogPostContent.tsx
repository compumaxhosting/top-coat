import IntroSection from "./sections/IntroSection";
import DefinitionSection from "./sections/DefinitionSection";
import Process from "./sections/Process";
import BenefitsSection from "./sections/BenefitsSection";
import SystemsSection from "./sections/SystemsSection";
import ApplicationsSection from "./sections/CostFactors";
import ProfessionalServices from "./sections/ProfessionalServices";
import Maintenance from "./sections/Maintenance";
import WhyChooseUs from "./sections/WhyChooseUs";
import ConclusionSection from "./sections/ConclusionSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import IndexParagraphs from "./sections/IndexParagraphs";

export default function BlogPostContent() {
  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">
          <IndexParagraphs />
          <IntroSection />
          <DefinitionSection />
          <Process />
          <BenefitsSection />
          <SystemsSection />
          <ApplicationsSection />
          <ProfessionalServices />
          <Maintenance />
          <FAQSection />
          <WhyChooseUs />
          <ConclusionSection />
          <CTASection />
        </div>
      </div>
    </article>
  );
}
