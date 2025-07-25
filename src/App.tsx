import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Scale, Shield, Users, Award, Globe, FileText, Building, Gavel, Lock, Wifi, Database, Eye, AlertTriangle, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">García & Asociados</h1>
                <p className="text-sm text-gray-600">Especialistas en Delitos Digitales & Derecho Internacional</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Servicios</a>
              <a href="#firma" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">La Firma</a>
              <a href="#equipo" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Equipo</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Contacto</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                Consulta Gratuita
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-800 font-medium">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-blue-800 font-medium">Servicios</a>
                <a href="#firma" className="text-gray-700 hover:text-blue-800 font-medium">La Firma</a>
                <a href="#equipo" className="text-gray-700 hover:text-blue-800 font-medium">Equipo</a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-800 font-medium">Contacto</a>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-semibold w-fit">
                  Consulta Gratuita
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Líderes en
              <span className="block text-amber-400">Delitos Digitales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Más de 25 años defendiendo en cibercrimen, delitos financieros digitales y derecho tecnológico. 
              Pioneros en la defensa legal del mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg">
                Consulta Inmediata
              </button>
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>México</span>
                </div>
                <div className="w-1 h-1 bg-blue-100 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">25+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">2500+</div>
              <p className="text-gray-600">Casos de Cibercrimen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">75+</div>
              <p className="text-gray-600">Expertos Digitales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">99%</div>
              <p className="text-gray-600">Tasa de Éxito Digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Líderes en defensa de delitos digitales y servicios legales tecnológicos de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Delitos Digitales",
                description: "Defensa especializada en cibercrimen, fraude digital, hacking y delitos informáticos."
              },
              {
                icon: Database,
                title: "Protección de Datos",
                description: "Compliance GDPR, LGPD, privacidad digital y violaciones de seguridad de datos."
              },
              {
                icon: Wifi,
                title: "Ciberseguridad Legal",
                description: "Asesoría en incidentes de seguridad, ransomware y respuesta a ataques cibernéticos."
              },
              {
                icon: Eye,
                title: "Vigilancia Digital",
                description: "Defensa contra espionaje digital, interceptación ilegal y violación de privacidad."
              },
              {
                icon: AlertTriangle,
                title: "Fraude Financiero Digital",
                description: "Especialistas en criptomonedas, lavado de dinero digital y estafas online."
              },
              {
                icon: Gavel,
                title: "Derecho Penal Tecnológico",
                description: "Defensa en delitos federales digitales, pornografía infantil y terrorismo cibernético."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-blue-200 group">
                <div className="mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit group-hover:bg-blue-800 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="flex items-center text-blue-800 font-semibold hover:text-amber-600 transition-colors">
                  Saber más <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="firma" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pioneros en Defensa Digital</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fundada en 1998, García & Asociados fue la primera firma en especializarse en delitos digitales en América Latina. 
                Con oficinas en Ciudad de México, Guadalajara, Los Angeles, Houston y un centro de ciberseguridad en Austin, Texas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Lock className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificación en Ciberseguridad</h4>
                    <p className="text-gray-600">Únicos abogados certificados en CISSP, CEH y forense digital</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Laboratorio Forense Digital</h4>
                    <p className="text-gray-600">Instalaciones propias para análisis de evidencia digital</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Respuesta 24/7</h4>
                    <p className="text-gray-600">Equipo de emergencia para incidentes cibernéticos críticos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-800 p-2 rounded-lg flex-shrink-0">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Encriptación Militar</h4>
                      <p className="text-gray-600 text-sm">Comunicaciones seguras con estándar AES-256</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-600 p-2 rounded-lg flex-shrink-0">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">IA Forense</h4>
                      <p className="text-gray-600 text-sm">Inteligencia artificial para análisis de evidencia digital</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                      <Wifi className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitoreo Global</h4>
                      <p className="text-gray-600 text-sm">Red de vigilancia de amenazas cibernéticas 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertos en Ciberseguridad Legal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El único equipo legal con certificaciones técnicas en ciberseguridad y experiencia forense digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ricardo García",
                title: "Socio Fundador & Director de Cibercrimen",
                speciality: "Delitos Digitales y Forense Computacional",
                education: "Harvard Law School, MIT (Ciberseguridad), CISSP"
              },
              {
                name: "Dra. Elena Cyber-Rodríguez",
                title: "Directora de Investigación Digital",
                speciality: "Análisis Forense y Recuperación de Datos",
                education: "Stanford Law, Carnegie Mellon (CS), CEH, GCFA"
              },
              {
                name: "Lic. Alex Chen-Morrison",
                title: "Especialista en Criptomonedas",
                speciality: "Blockchain, DeFi y Lavado Digital",
                education: "Yale Law, Berkeley (Blockchain), CryptoCurrency Certified"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{member.title}</p>
                <p className="text-gray-700 mb-3">{member.speciality}</p>
                <p className="text-sm text-gray-500">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Testimonios reales de clientes que confiaron en nuestra experiencia en ciberseguridad legal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "García & Asociados nos salvó de un ataque de ransomware que amenazaba con destruir nuestra empresa. Su respuesta inmediata y expertise legal fue excepcional.",
                author: "Carlos Mendoza",
                position: "CEO, TechCorp México",
                case: "Defensa contra Ransomware"
              },
              {
                quote: "Cuando fuimos víctimas de fraude con criptomonedas, pensamos que habíamos perdido todo. El equipo recuperó el 95% de nuestros activos digitales.",
                author: "Ana Martínez",
                position: "Directora Financiera, InvestCrypto",
                case: "Recuperación de Criptomonedas"
              },
              {
                quote: "Su laboratorio forense digital encontró evidencia crucial que las autoridades habían pasado por alto. Ganamos el caso gracias a su tecnología.",
                author: "Roberto Silva",
                position: "Empresario",
                case: "Espionaje Industrial Digital"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-blue-200 text-sm">{testimonial.position}</p>
                  <p className="text-amber-400 text-sm font-medium mt-2">{testimonial.case}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agenda tu consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos legales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors">
                    <option>Selecciona el área de especialidad</option>
                    <option>Delitos Digitales y Cibercrimen</option>
                    <option>Protección de Datos y Privacidad</option>
                    <option>Ciberseguridad Legal</option>
                    <option>Vigilancia Digital y Espionaje</option>
                    <option>Fraude Financiero Digital</option>
                    <option>Derecho Penal Tecnológico</option>
                    <option>Respuesta a Incidentes Cibernéticos</option>
                    <option>Criptomonedas y Blockchain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="Describe tu caso: ¿Has sido víctima de cibercrimen? ¿Necesitas defensa en delitos digitales? ¿Requieres análisis forense digital?"
                  ></textarea>
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Consulta Segura y Confidencial</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Nuestras Oficinas</h3>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-amber-400">Ciudad de México</h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-amber-500" />
                        <span>Av. Reforma 404, Cuauhtémoc, CDMX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <span>+52 55 1234-5678</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-amber-400">Los Angeles</h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-amber-500" />
                        <span>1234 Wilshire Blvd, Los Angeles, CA</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <span>+1 213 456-7890</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-amber-400">Centro de Ciberseguridad - Austin</h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-amber-500" />
                        <span>500 Tech Plaza, Austin, TX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <span>+1 512 CYBER-LAW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Lunes - Viernes: 8:00 AM - 7:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-amber-400">Emergencias Cibernéticas 24/7</p>
                  <p className="text-red-400">Respuesta inmediata a ataques</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Contacto Directo</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-5 w-5 text-amber-500" />
                    <span>cyber@garciaasociados.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="h-5 w-5 text-amber-500" />
                    <span>Línea directa: +52 55 8765-4321</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-400">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span>Emergencias: +1 800 CYBER-911</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">García & Asociados</h3>
                  <p className="text-gray-400 text-sm">Especialistas en Delitos Digitales & Ciberseguridad Legal</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Primera firma legal especializada en delitos digitales en América Latina. Pioneros en 
                ciberseguridad legal con laboratorio forense digital propio y respuesta 24/7 a incidentes.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Especialidades Digitales</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delitos Digitales</li>
                <li>Protección de Datos</li>
                <li>Ciberseguridad Legal</li>
                <li>Vigilancia Digital</li>
                <li>Fraude Financiero Digital</li>
                <li>Criptomonedas & Blockchain</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Política de Ciberseguridad</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Reportes de Amenazas</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Centro de Capacitación</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Reporte de Incidentes</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 García & Asociados. Todos los derechos reservados. | Certificados ISO 27001 | Registro ante la Barra Mexicana de Abogados</p>
            <p className="mt-2 text-sm">Comunicaciones encriptadas AES-256 | Laboratorio forense certificado | Respuesta de emergencia 24/7</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;