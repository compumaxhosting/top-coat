import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import HeroSection from "@/components/About/HeroSection";
import StorySection from "@/components/About/StorySection";
import CoreValuesSection from "@/components/About/CoreValuesSection";

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#14161A]">
				<HeroSection />
				<StorySection />
				<CoreValuesSection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default AboutPage;