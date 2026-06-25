import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/GarageFloors/CTASection";
import HeroSection from "@/components/GarageFloors/HeroSection";
import ProjectGallery from "@/components/GarageFloors/ProjectGallery";
import TableOfContents from "@/components/GarageFloors/table-content/TableOfContent";
import GarageFloorContent from "@/components/GarageFloors/table-content/ContentSection";

const GarageFloorsPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<TableOfContents />
				<GarageFloorContent />
				<ProjectGallery />
				<OtherServices currentSlug="garage-floor-coating-contractors-in-wayne-nj
" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default GarageFloorsPage;
