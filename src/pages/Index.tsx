import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
