import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import CTASection from "@/components/Home/CTASection";
import ServicesSection from "@/components/Home/ServiceSection";

const ServicesPage = () => {
	return (
		<>
			<Navbar />
			<main className=" md:pt-20 bg-[#0D0F12]">
				<h1 className="sr-only">Epoxy Flooring &amp; Decorative Concrete Services in New Jersey</h1>
				<ServicesSection />
				<CTASection />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default ServicesPage;