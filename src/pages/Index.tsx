import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { PaymentSection } from "@/components/PaymentSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
