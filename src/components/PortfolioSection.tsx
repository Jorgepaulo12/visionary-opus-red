import { useState } from 'react';
import { Eye, ExternalLink, Calendar, MapPin } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const projects = [
    {
      id: 1,
      title: "Complexo Empresarial Central",
      category: "Fiscalização",
      image: portfolio1,
      description: "Supervisão completa da construção de complexo empresarial com 15.000m²",
      client: "Grupo Empresarial Lisboa",
      date: "2024",
      location: "Lisboa",
      tags: ["Fiscalização", "Obras Públicas", "Gestão"]
    },
    {
      id: 2,
      title: "Infraestrutura IT Corporativa",
      category: "Tecnologia",
      image: portfolio2,
      description: "Implementação de sistema de gestão informática para multinacional",
      client: "TechCorp International",
      date: "2024",
      location: "Porto",
      tags: ["IT", "Consultoria", "Sistemas"]
    },
    {
      id: 3,
      title: "Paisagismo Corporativo Verde",
      category: "Jardins",
      image: portfolio3,
      description: "Design e manutenção de espaços verdes em campus empresarial",
      client: "EcoTech Solutions",
      date: "2023",
      location: "Coimbra",
      tags: ["Paisagismo", "Sustentabilidade", "Design"]
    },
    {
      id: 4,
      title: "Sistema de Gestão Documental",
      category: "Tecnologia",
      image: portfolio2,
      description: "Digitalização e organização de arquivo histórico municipal",
      client: "Câmara Municipal",
      date: "2023",
      location: "Braga",
      tags: ["Digitalização", "Gestão", "Arquivo"]
    },
    {
      id: 5,
      title: "Renovação de Espaços Públicos",
      category: "Fiscalização",
      image: portfolio1,
      description: "Supervisão de obras de requalificação urbana",
      client: "Município do Porto",
      date: "2023",
      location: "Porto",
      tags: ["Urbano", "Requalificação", "Público"]
    },
    {
      id: 6,
      title: "Jardins Corporativos Sustentáveis",
      category: "Jardins",
      image: portfolio3,
      description: "Criação de espaços verdes com sistema de rega inteligente",
      client: "Green Building SA",
      date: "2024",
      location: "Aveiro",
      tags: ["Sustentável", "Tecnologia", "Verde"]
    }
  ];

  const categories = ['Todos', 'Fiscalização', 'Tecnologia', 'Jardins'];

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore alguns dos nossos projetos mais recentes e descubra como 
            transformamos ideias em realidade com qualidade e inovação.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="portfolio-card group bg-card border border-border animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground hover:bg-primary-light transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground hover:bg-primary-light transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.date} • {project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-outline-hero">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;