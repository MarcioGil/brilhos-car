import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  { id: 1, name: "Polimento", icon: "✨" },
  { id: 2, name: "Higienização", icon: "🧼" },
  { id: 3, name: "Proteção Cerâmica", icon: "🛡️" },
  { id: 4, name: "Restauração", icon: "🔧" },
];

const beforeAfter = [
  { id: 1, before: "/img1.jpg", after: "/img2.jpg" },
  { id: 2, before: "/img3.jpg", after: "/img4.jpg" },
  { id: 3, before: "/img5.jpg", after: "/img6.jpg" },
  { id: 4, before: "/img7.jpg", after: "/img8.jpg" },
];

const values = [
  {
    title: "Excelência",
    description: "Compromisso com a qualidade em cada detalhe do nosso trabalho",
  },
  {
    title: "Confiança",
    description: "Transparência e honestidade em todas as nossas relações",
  },
  {
    title: "Inovação",
    description: "Uso de técnicas e produtos de ponta para melhores resultados",
  },
  {
    title: "Dedicação",
    description: "Atenção personalizada para cada cliente e seu veículo",
  },
];

export default function Home() {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔧</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Brilhos Car</h1>
              <p className="text-xs text-gray-600">Excelência em Serviços Automotivos</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition">Serviços</a>
            <a href="#antes-depois" className="text-gray-700 hover:text-blue-600 transition">Antes e Depois</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Seu Carro Merece <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brilhar</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Transformamos o visual do seu veículo com técnicas profissionais e produtos premium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg">
                Agende Agora
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-blue-600">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-lg text-gray-600">Soluções completas para a beleza e proteção do seu veículo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="p-8 text-center hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">Resultados excepcionais com técnicas profissionais</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section id="antes-depois" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Antes e Depois</h3>
            <p className="text-lg text-gray-600">Veja a transformação que podemos fazer no seu carro</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px] bg-gray-200 flex items-center justify-center">
              <img
                src={beforeAfter[activeBeforeAfter].before}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ANTES</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 p-8">
              {beforeAfter.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBeforeAfter(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeBeforeAfter === idx
                      ? "border-blue-600 scale-105"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={beforeAfter[idx].before}
                    alt={`Galeria ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Missão</h4>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar excelência em serviços automotivos, transformando veículos com dedicação, profissionalismo e inovação
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Visão</h4>
              <p className="text-gray-600 leading-relaxed">
                Ser referência em beleza automotiva, reconhecida pela qualidade, confiança e satisfação dos clientes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Valores</h4>
              <p className="text-gray-600 leading-relaxed">
                Excelência, confiança, inovação e dedicação em cada projeto que realizamos
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                      <ChevronRight className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-1">{value.title}</h5>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-lg text-gray-600">Estamos prontos para transformar seu veículo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-purple-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">E-mail</h4>
              <p className="text-gray-600 mb-4">brilhos2022car@gmail.com</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Enviar E-mail
              </Button>
            </Card>

            {/* WhatsApp Card */}
            <Card className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600 mb-4">(21) 2661-6471</p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Conversar no WhatsApp
              </Button>
            </Card>

            {/* Location Card */}
            <Card className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Localização</h4>
              <p className="text-gray-600 mb-4">Rua das Oficinas, 123</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Ver no Mapa
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Brilhos Car</h3>
            <p className="text-gray-400 mb-6">Excelência em Serviços Automotivos</p>
            <p className="text-gray-500 text-sm">
              © 2024 Brilhos Car. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
