import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-light/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="text-primary font-semibold text-sm">
              Soluções Empresariais Completas
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title mb-6">
            Transformamos a Sua
            <span className="block text-gradient">
              Visão em Realidade
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-12 max-w-2xl mx-auto">
            Fornecemos serviços e produtos de alta qualidade para empresas que buscam 
            excelência, inovação e resultados excepcionais em todas as áreas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            <Button className="btn-hero group">
              Descubra Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-outline-hero group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Apresentação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">200+</div>
              <div className="text-primary-foreground/80 text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-sm">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;