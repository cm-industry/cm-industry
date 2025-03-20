import HeroSection from '../components/HeroSection';
import LiveryDesignGallery from '../components/LiveryDesignGallery';
import LogotypesSection from '../components/LogotypesSection';
import MerchAndIllustrationsSection from '../components/MerchAndIllustrationsSection';
import OurClients from '../components/OurClients';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="">
      <section className="w-full bg-[#101010]">
        <HeroSection />
      </section>

      {/* Фон для галереи Livery Designs изменён на #151515 */}
      <section className="w-full bg-[#151515] py-1 md:py-8">
        <LiveryDesignGallery />
      </section>

      <section className="w-full bg-[#101010] py-8">
        <LogotypesSection />
      </section>

      {/* Фон для Merch изменён на #151515 */}
      <section className="w-full bg-[#151515] py-8">
        <MerchAndIllustrationsSection />
      </section>

      <section className="w-full bg-[#101010] py-8">
        <OurClients />
      </section>

      <section id="contact" className="w-full bg-[#101010] py-8">
        <ContactForm />
      </section>

      <section className="w-full bg-[#101010] py-8">
        <Footer />
      </section>
    </main>
  );
}
