import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/BuildingFacades/CTASection";
import HeroSection from "@/components/BuildingFacades/HeroSection";
import ProjectGallery from "@/components/BuildingFacades/ProjectGallery";
import ContentSection from "@/components/BuildingFacades/table-content/ContentSection";
import TableOfContents from "@/components/BuildingFacades/table-content/TableOfContent";

const BuildingFacadesPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<TableOfContents />
				<ContentSection />
				<ProjectGallery />
				<OtherServices currentSlug="building-facade-contractors-wayne-nj" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default BuildingFacadesPage;
