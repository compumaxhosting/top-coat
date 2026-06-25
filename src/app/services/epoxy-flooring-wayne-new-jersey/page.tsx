import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import CTASection from "@/components/EpoxyFlooring/CTASection";
import HeroSection from "@/components/EpoxyFlooring/HeroSection";
import ProjectGallery from "@/components/EpoxyFlooring/ProjectGallery";
import OtherServices from "@/components/Home/OtherServices";
import TableOfContents from "@/components/EpoxyFlooring/table-content/TableOfContent";
import EpoxyContentSections from "@/components/EpoxyFlooring/table-content/ContentSection";

const EpoxyFlooringPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<TableOfContents />
				<EpoxyContentSections /> 
				<ProjectGallery />
				<OtherServices currentSlug="epoxy-flooring-wayne-new-jersey" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default EpoxyFlooringPage;
