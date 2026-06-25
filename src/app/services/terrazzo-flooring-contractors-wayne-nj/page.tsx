import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import OtherServices from "@/components/Home/OtherServices";
import CTASection from "@/components/Terrazzo/CTASection";
import HeroSection from "@/components/Terrazzo/HeroSection";
import ProjectGallery from "@/components/Terrazzo/ProjectGallery";
import TableOfContents from "@/components/Terrazzo/table-content/TableOfContent";
import TerrazzoContent from "@/components/Terrazzo/table-content/ContentSection";

const TerrazzoPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<TableOfContents />
				<TerrazzoContent />
				<ProjectGallery />
				<OtherServices currentSlug="terrazzo-flooring-contractors-wayne-nj" />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default TerrazzoPage;
