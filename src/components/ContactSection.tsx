import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Fiscalização de Obras',
    'Atividades Imobiliárias',
    'Apoio Administrativo',
    'Aluguer de Veículos',
    'Manutenção de Jardins',
    'Gestão Informática',
    'Consultoria IT',
    'Produtos Tecnológicos',
    'Outro'
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar a sua ideia em realidade? 
            Contacte-nos hoje e descubra como podemos ajudar o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border h-fit">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Informações de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">+258 82 123 4567</p>
                    <p className="text-muted-foreground">+258 86 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ntimbuca.co.mz</p>
                    <p className="text-muted-foreground">vendas@ntimbuca.co.mz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-muted-foreground">
                      Rua Principal, 123<br />
                      Lichinga, Niassa, Moçambique
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h - 18h<br />
                      Sábado: 9h - 13h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Contacto de Emergência</h4>
                <p className="text-sm text-muted-foreground">
                  Para situações urgentes fora do horário comercial
                </p>
                <p className="font-semibold text-primary">+258 84 900 0000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Descreva o seu projeto ou necessidade..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-muted-foreground">
                    Aceito os termos de privacidade e o processamento dos meus dados *
                  </label>
                </div>

                <Button type="submit" className="btn-hero w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Nossa Localização</h3>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa interativo será carregado aqui
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Rua Principal, 123, Lichinga, Niassa, Moçambique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;