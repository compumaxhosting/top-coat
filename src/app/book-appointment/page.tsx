import BackToTop from "@/components/Layout/BackToTop";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

const BookAppointmentPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#14161A] pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-primary">Book an Appointment</p>
            <h1 className="text-4xl font-serif font-bold text-white/90 md:text-6xl">
              Request Your <span className="text-gradient-copper">Estimate</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
              Share a few details about your project and we&apos;ll follow up with the next steps.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <ContactForm
              submitLabel="Book Appointment"
              successMessage="Appointment request sent! We&apos;ll get back to you within 24 hours."
              showPreferredDateField
            />
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default BookAppointmentPage