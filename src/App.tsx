/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Palmtree, 
  Globe, 
  MapPin, 
  Heart, 
  ArrowRight, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  BookOpen,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';
import WeddingPage from './components/WeddingPage';

// --- Data ---
const SERVICES = [
  { id: 1, title: 'Pacotes Nacionais', icon: MapPin, description: 'Explore o melhor do Brasil com conforto.' },
  { id: 2, title: 'Pacotes Internacionais', icon: Globe, description: 'Destinos incríveis ao redor do mundo.' },
  { id: 3, title: 'Roteiros Personalizados', icon: Palmtree, description: 'Viagens moldadas ao seu estilo único.' },
  { id: 4, title: 'Casamentos e Lua de Mel', icon: Heart, description: 'Momentos inesquecíveis em cenários épicos.' },
];

const NAV_LINKS = [
  { name: 'Início', href: '#inicio', icon: Home },
  { name: 'Quem Somos', href: '#quem-somos', icon: Users },
  { name: 'Depoimentos', href: '#depoimentos', icon: Star },
  { name: 'Casamentos', href: '#casamentos', icon: Heart },
  { name: 'Novidades', href: '#novidades', icon: BookOpen },
];

const BLOG_POSTS = [
  { 
    title: 'Destinos em Alta para 2026', 
    category: 'Tendências', 
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600',
    description: 'Descubra as tendências que vão dominar o turismo no próximo ano.'
  },
  { 
    title: 'Como Planejar seu Destination Wedding', 
    category: 'Dicas', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    description: 'Dicas essenciais para organizar seu casamento dos sonhos em outro país.'
  },
  { 
    title: 'Safari de Luxo: O que você precisa saber', 
    category: 'Guias', 
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600',
    description: 'Um guia completo para viver a experiência selvagem com o máximo conforto.'
  },
];

const WEDDING_DESTINATIONS = [
  {
    name: 'Tivoli Ecoresort Praia do Forte',
    location: 'Praia do Forte, Bahia',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Iberostar Selection',
    location: 'Praia do Forte, Bahia',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Grand Palladium Imbassaí',
    location: 'Imbassaí, Bahia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Txai Resort Itacaré',
    location: 'Itacaré, Bahia',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Transamerica Comandatuba',
    location: 'Ilha de Comandatuba, Bahia',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: "Arraial d'Ajuda Eco Resort",
    location: "Arraial d'Ajuda, Bahia",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600'
  }
];

// --- Components ---

interface NavbarProps {
  currentPage: 'home' | 'wedding';
  onNavigate: (page: 'home' | 'wedding', hash?: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm py-4 border-b border-gold-border' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src="https://lh3.googleusercontent.com/d/1oNtsRcQJ5bFfChIHy5GTtFweCbJbdwaD" 
            alt="Peralva Viagens Logo" 
            className={`h-10 w-auto md:h-12 object-contain transition-all ${!isScrolled && currentPage === 'home' ? 'brightness-0 invert opacity-90' : ''}`}
          />
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden lg:flex gap-8 text-[11px] font-semibold uppercase tracking-widest ${isScrolled || currentPage === 'wedding' ? 'text-ink' : 'text-white'}`}>
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                if (link.name === 'Casamentos') {
                  onNavigate('wedding');
                } else {
                  onNavigate('home', link.href.substring(1));
                }
              }}
              className={`hover:text-gold-weak transition-colors flex items-center gap-2 ${currentPage === 'wedding' && link.name === 'Casamentos' ? 'text-gold-strong font-bold' : ''}`}
            >
              <link.icon size={14} className="opacity-70" />
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contato" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home', 'contato');
            }}
            className={`hidden lg:flex items-center justify-center btn-pill h-10 ${isScrolled || currentPage === 'wedding' ? 'text-ink border-gold-strong/40 hover:bg-gold-strong hover:text-white' : 'text-white border-white hover:bg-white hover:text-ink'}`}
          >
            Fale Conosco
          </a>
          
          <button className="lg:hidden cursor-pointer" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={isScrolled || currentPage === 'wedding' ? 'text-ink' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-paper z-[150] flex flex-col p-10 pt-24 gap-2 text-sm font-medium tracking-[0.2em] uppercase">
          <button className="absolute top-8 left-10" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-gold-strong" />
          </button>
          
          <div className="mt-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (link.name === 'Casamentos') {
                    onNavigate('wedding');
                  } else {
                    onNavigate('home', link.href.substring(1));
                  }
                }}
                className="flex items-center gap-5 py-5 border-b border-gold-border/20 hover:text-gold-strong transition-colors"
              >
                <link.icon size={20} className="text-gold-strong" />
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate('home', 'contato');
              }}
              className="flex items-center gap-5 py-5 border-b border-gold-border/20 hover:text-gold-strong transition-colors"
            >
              <Mail size={20} className="text-gold-strong" />
              Contato
            </a>
          </div>

          <div className="mt-12">
            <a 
              href="#contato" 
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate('home', 'contato');
              }}
              className="inline-block bg-[#A17C4F] text-white py-5 px-10 text-[11px] font-bold tracking-[0.3em] uppercase w-full text-center rounded-[15px]"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, highlight, subtitle, center = true, isDark = false }: { title: string, highlight?: string, subtitle?: string, center?: boolean, isDark?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'} group`}>
    <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 font-serif leading-tight tracking-tight ${isDark ? 'text-white' : 'text-ink'}`}>
      {highlight && (
        <span className="block text-gold-strong mb-3 italic font-normal text-lg md:text-xl tracking-normal">
          {highlight}
        </span>
      )}
      <span className="relative inline-block pb-4">
        {title}
        <span className={`absolute bottom-0 h-[3px] bg-gradient-to-r from-gold-strong to-gold-weak rounded-full w-24 ${center ? 'left-1/2 -translate-x-1/2' : 'left-0'}`} />
      </span>
    </h2>
    {subtitle && <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed font-sans mt-4`}>{subtitle}</p>}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState<'home' | 'wedding'>('home');

  const handleNavigation = (target: 'home' | 'wedding', hash?: string) => {
    setCurrentPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (target === 'home' && hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [currentResortIndex, setCurrentResortIndex] = useState(0);
  const [visibleResorts, setVisibleResorts] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleResorts(4);
      } else if (window.innerWidth >= 640) {
        setVisibleResorts(2);
      } else {
        setVisibleResorts(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalResorts = 6;

  const nextResortSlide = () => {
    setCurrentResortIndex((prev) => {
      const maxIndex = totalResorts - visibleResorts;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevResortSlide = () => {
    setCurrentResortIndex((prev) => {
      const maxIndex = totalResorts - visibleResorts;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-paper">
      <div className="min-h-screen flex flex-col">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-strong origin-left z-[100]" style={{ scaleX }} />
        
        <Navbar currentPage={currentPage} onNavigate={handleNavigation} />

        {currentPage === 'home' ? (
          <>
            {/* --- HERO SECTION --- */}
            <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-paper">
              {/* Background Images with Fade effect */}
              <div className="absolute inset-0 z-0">
                {/* Slide 1: Viagem inesquecível */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1gnHrffFVyQA40lhoWOoCBGMIR6VAoDRx" 
                  alt="Viagem Inesquecível" 
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Slide 2: Noivos recém-casados */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1D2y6N7hcC3O6YeT8Zcc_A92Kf748o9_9" 
                  alt="Noivos Recém-Casados" 
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Dark gradient overlay for elegance and contrast */}
                <div className="absolute inset-0 bg-ink/75 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/40" />
              </div>

              <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-xl md:text-3xl lg:text-5xl text-white font-cinzel mb-8 leading-[1.15] tracking-tight"
                >
                  Casamentos e Viagens que começam com um sonho e terminam em <span className="text-gold-weak italic font-normal">memórias inesquecíveis</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white/80 text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto font-semibold"
                >
                  Pacotes nacionais e internacionais + roteiros exclusivos para casamentos
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center"
                >
                  <a 
                    href="#contato" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('home', 'contato');
                    }}
                    className="px-8 md:px-12 py-5 bg-gold-strong text-white rounded-[15px] font-bold tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer border border-gold-strong"
                  >
                    Planeje sua Viagem <ChevronRight size={14} />
                  </a>
                  <button 
                    onClick={() => handleNavigation('wedding')}
                    className="px-8 md:px-12 py-5 bg-transparent border border-white/40 text-white rounded-[15px] font-bold tracking-widest text-[11px] uppercase hover:bg-white/10 transition-all cursor-pointer"
                  >
                    PLANEJE SEU CASAMENTO
                  </button>
                </motion.div>
              </div>
            </section>

      {/* --- WEDDING HIGHLIGHT --- */}
      <section id="casamentos" className="py-24 relative bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gold-border rounded-[15px] overflow-hidden relative min-h-[600px] flex items-center shadow-sm">
            <div className="grid lg:grid-cols-2 w-full">
              <div className="p-12 md:p-20 relative z-10 flex flex-col justify-center border-r border-gold-border">
                <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-10 font-serif text-7xl pointer-events-none italic">Wedding</div>
                <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-4 block">Destination Wedding</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-ink font-serif font-bold mb-6 leading-tight">
                  Casamentos são o nosso forte, mas não o nosso <span className="text-gold-strong italic font-normal">limite</span>.
                </h2>
                <p className="text-ink/85 text-sm md:text-base leading-relaxed mb-4 max-w-xl font-sans">
                  Cuidamos da logística dos convidados, hospedagem e experiências pré e pós-casamento, traduzindo o estilo do casal em cada detalhe.
                </p>
                <p className="text-gold-strong font-serif italic text-base md:text-lg mb-8 font-semibold">
                  Na Peralva Viagens, você vai muito longe
                </p>
                <div className="flex">
                  <button 
                    onClick={() => handleNavigation('wedding')}
                    className="inline-block bg-linear-to-r from-gold-strong to-gold-weak text-white px-12 py-5 text-sm font-bold uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 rounded-[15px] text-center cursor-pointer"
                  >
                    Comece a planejar
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                  alt="Wedding" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* --- RESORTS CAROUSEL --- */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-3 block">Cenários dos Sonhos</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-ink font-serif font-bold">Resorts Exclusivos para seu Casamento</h3>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={prevResortSlide}
                  className="w-12 h-12 rounded-full border border-gold-border flex items-center justify-center hover:bg-gold-strong hover:border-gold-strong hover:text-white text-ink transition-all cursor-pointer"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextResortSlide}
                  className="w-12 h-12 rounded-full border border-gold-border flex items-center justify-center hover:bg-gold-strong hover:border-gold-strong hover:text-white text-ink transition-all cursor-pointer"
                  aria-label="Próximo"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Carousel track wrapper */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out -mx-3"
                style={{ transform: `translateX(-${currentResortIndex * (100 / visibleResorts)}%)` }}
              >
                {WEDDING_DESTINATIONS.map((dest, idx) => {
                  const messageText = `Olá! Gostaria de solicitar um orçamento para meu casamento no resort *${dest.name}* (${dest.location}).\n\nFoto de referência: ${dest.image}`;
                  const waUrl = `https://wa.me/5571996060083?text=${encodeURIComponent(messageText)}`;
                  return (
                    <div 
                      key={idx}
                      className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3"
                    >
                      <div className="bg-white border border-gold-border rounded-[15px] overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col h-full">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={dest.image} 
                            alt={dest.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <h4 className="text-base font-serif font-bold text-ink mb-1 group-hover:text-gold-strong transition-colors min-h-[48px] flex items-center">{dest.name}</h4>
                            <p className="text-[11px] text-gold-strong font-semibold tracking-wider uppercase mb-2">{dest.location}</p>
                          </div>
                          <a 
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-gold-strong hover:text-gold-weak flex items-center gap-1 mt-4 transition-colors"
                          >
                            Solicitar Orçamento <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE DESTAQUE --- */}
      <section className="py-24 bg-white border-b border-gold-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="md:max-w-2xl md:mx-auto lg:max-w-none">
            <SectionHeader 
              title="Sua experiência, pensada sob medida."
              highlight="Sobre Destaque"
              center={false}
            />
            <p className="text-ink/90 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              Na Peralva Viagens, cada roteiro é pensado sob medida. Seja para férias, lua de mel ou um destination wedding, criamos experiências que fazem sentido para você.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((s, idx) => (
                <motion.div 
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-4 p-8 bg-paper rounded-[15px] border border-gold-border hover:bg-white transition-all group cursor-pointer hover:shadow-lg"
                >
                  <div className="text-gold-strong transition-colors duration-300">
                    <s.icon size={24} />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-ink group-hover:text-gold-strong transition-colors uppercase tracking-widest">{s.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[15px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800" 
                alt="Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-10 gold-bg rounded-[15px] shadow-xl text-white hidden lg:block">
              <p className="text-3xl font-serif mb-1 italic">+10 anos</p>
              <p className="text-xs font-bold tracking-widest uppercase">Criando memórias</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUEM SOMOS --- */}
      <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
        {/* Soft background accents for depth */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-weak/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-strong/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <SectionHeader 
            title="A Peralva Viagens nasceu com o propósito de transformar viagens em experiências únicas."
            highlight="Quem Somos"
          />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-16 max-w-3xl mx-auto font-sans">
            Com expertise em turismo nacional e internacional, oferecemos atendimento personalizado e cuidamos de cada etapa do seu planejamento — desde a escolha do destino até o seu retorno.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Atendimento Próximo', icon: Phone, desc: 'Suporte humanizado em todas as etapas.' },
              { title: 'Roteiros sob Medida', icon: MapPin, desc: 'Planejamento exclusivo para seu perfil.' },
              { title: 'Parcerias Confiáveis', icon: Globe, desc: 'Curadoria dos melhores parceiros globais.' },
            ].map((d, idx) => (
              <div 
                key={idx} 
                className={`p-10 bg-white border-2 border-gold-border/30 rounded-[15px] hover:border-gold-strong/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-strong/10 group flex flex-col items-center text-center cursor-pointer relative overflow-hidden ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Decorative background border glow on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold-strong to-gold-weak opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-[15px] bg-gold-strong/5 text-gold-strong group-hover:bg-gold-strong group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <d.icon size={26} />
                </div>
                
                <h4 className="font-serif text-lg text-ink font-semibold mb-3 group-hover:text-gold-strong transition-colors tracking-wide">
                  {d.title}
                </h4>
                
                <p className="text-gray-600 text-[14px] leading-relaxed max-w-[240px]">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOBRE LIDIANE PERAL --- */}
      <section id="sobre-lidiane" className="py-24 bg-paper border-t border-b border-gold-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gold-border rounded-[15px] overflow-hidden shadow-sm p-8 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Photo Column */}
              <div className="lg:col-span-5 relative order-last lg:order-first">
                <div className="relative aspect-[4/5] rounded-[15px] overflow-hidden shadow-2xl border-4 border-white bg-white/50">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1Q_pzjrs0y5gaPx1wAKGqUCHWszOA4XKa" 
                    alt="Lidiane Peral" 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Elegant small info badge */}
                <div className="absolute -bottom-6 -right-6 p-8 bg-paper border border-gold-border rounded-[15px] shadow-xl text-center max-w-[260px] z-10">
                  <p className="text-2xl font-serif text-gold-strong mb-1 italic">Lidiane Peralva</p>
                  <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#A17C4F]/90 uppercase leading-relaxed font-sans">Turismo e Hotelaria<br />& MBA em Marketing</p>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <SectionHeader 
                  title="Sobre Lidiane"
                  highlight="Assessoria & Viagens"
                  center={false}
                />
                
                <div className="space-y-6 text-ink/80 text-sm md:text-base leading-relaxed font-sans -mt-8">
                  <p className="font-semibold text-ink text-base md:text-lg font-serif italic text-gold-strong mb-4">
                    Lidiane Peralva é agente de viagem, produtora e organizadora de casamentos nos resorts e hotéis mais desejados do Litoral Norte da Bahia (Linha Verde) e em outros cenários encantadores da Bahia.
                  </p>
                  <p>
                    Sou formada em Turismo e Hotelaria com MBA em Marketing, o que me permite unir conhecimento técnico, visão estratégica e sensibilidade para criar experiências únicas e inesquecíveis.
                  </p>
                  <p>
                    Ao longo dos anos, construí uma trajetória sólida com noivos do Brasil e do mundo, oferecendo também minha agência de viagens exclusiva, que facilita toda a jornada do casal e dos convidados, do embarque ao retorno, com cuidado e acolhimento.
                  </p>
                  <p className="border-l-4 border-gold-strong pl-6 py-4 italic text-ink/90 font-serif text-base md:text-lg bg-paper rounded-r-[15px] pr-4 shadow-sm">
                    "Mais do que planejar um casamento, estou aqui para garantir que vocês vivam esse sonho com leveza, segurança e alegria, desde o primeiro contato até o último pôr do sol da viagem."
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#contato" className="px-8 py-5 bg-linear-to-r from-gold-strong to-gold-weak text-white rounded-[15px] font-bold tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer border-none">
                    Planeje seu Evento com Lidiane <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS --- */}
      <section id="depoimentos" className="py-24 bg-white border-t border-b border-gold-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="O que dizem os nossos casais"
            highlight="Depoimentos"
            subtitle="Histórias reais de amor e aventura organizadas com excelência e sensibilidade."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                couple: 'Mariana & Roberto', 
                event: 'Casamento no Tivoli Ecoresort',
                location: 'Praia do Forte, BA',
                text: 'A Lidiane transformou nosso sonho em realidade! Cuidou de todos os detalhes dos nossos convidados e a assessoria foi impecável. Foi o dia mais feliz das nossas vidas!',
                avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150'
              },
              { 
                couple: 'Beatriz & Thiago', 
                event: 'Lua de Mel Perfeita',
                location: 'Maldivas',
                text: 'Não temos palavras para agradecer o carinho e o profissionalismo. Nossa lua de mel foi maravilhosa, com cada detalhe planejado com muito cuidado e atenção.',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
              },
              { 
                couple: 'Juliana & Felipe', 
                event: 'Casamento no Grand Palladium',
                location: 'Imbassaí, BA',
                text: 'Casar na praia sempre foi nosso desejo, mas a logística nos assustava. A Lidiane e a Peralva Viagens cuidaram de absolutamente tudo e superaram nossas expectativas!',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150'
              },
              { 
                couple: 'Carolina & Gustavo', 
                event: 'Roteiro Personalizado',
                location: 'Toscana, Itália',
                text: 'A viagem foi espetacular! O roteiro personalizado nos permitiu conhecer cantinhos mágicos de forma super tranquila. Atendimento nota mil de toda a equipe!',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
              }
            ].map((dep, idx) => (
              <div 
                key={idx}
                className="bg-paper border border-gold-border rounded-[15px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-8 text-gold-strong/20 text-6xl font-serif pointer-events-none select-none">“</div>
                <div>
                  <div className="flex gap-1 mb-4 text-gold-strong">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="text-gold-strong" />
                    ))}
                  </div>
                  <p className="text-ink/85 text-xs md:text-sm leading-relaxed mb-6 font-sans italic">
                    "{dep.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-gold-border/40 pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-strong/20">
                    <img src={dep.avatar} alt={dep.couple} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs md:text-sm text-ink">{dep.couple}</h4>
                    <p className="text-[10px] text-gold-strong font-semibold tracking-wider uppercase">{dep.event}</p>
                    <p className="text-[9px] text-ink/60">{dep.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOVIDADES (EX-BLOG) --- */}
      <section id="novidades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-lg">
              <SectionHeader 
                title="Inspirações para sua próxima viagem"
                highlight="Novidades"
                center={false}
              />
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-[15px] font-bold tracking-widest text-xs uppercase mb-16">
              VER TODOS
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-[15px] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <span className="text-gold-strong text-xs font-bold uppercase tracking-widest mb-3 block">{post.category}</span>
                <h4 className="text-2xl font-serif leading-snug group-hover:text-gold-strong transition-colors mb-3 text-ink font-semibold">{post.title}</h4>
                <p className="text-ink/80 text-base leading-relaxed line-clamp-2 font-sans">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECONHECIMENTO NA MÍDIA --- */}
      <section id="reconhecimento" className="py-24 bg-ink border-b border-gold-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Só os melhores casais podem ter"
            highlight="Reconhecimento"
            subtitle="Garanta a Assessoria e Agência de Viagens mais Renomada da Bahia"
            center={true}
            isDark={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* CARD 1 - A TARDE */}
            <div className="bg-[#342a1c] border border-gold-strong/20 hover:border-gold-strong/40 rounded-[15px] p-8 flex flex-col justify-between hover:bg-[#3f3323] transition-all duration-300 group cursor-pointer hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold-strong to-gold-weak opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Mock Newspaper Clipping */}
              <div className="bg-[#FAF9F5] p-5 text-[#2D2418] aspect-[4/3] rounded-[15px] overflow-hidden mb-8 border border-gold-border/20 shadow-none flex flex-col justify-between font-serif relative">
                <div className="border-b border-[#2D2418]/60 pb-2 mb-2">
                  <div className="flex justify-between items-end">
                     <span className="font-serif font-black text-2xl tracking-tighter uppercase text-[#1a1a1a]">A TARDE</span>
                    <span className="font-sans font-bold text-[9px] tracking-widest text-[#A17C4F] uppercase">NEGÓCIOS</span>
                  </div>
                  <div className="h-[2px] bg-[#2D2418] mt-1" />
                  <div className="h-[0.5px] bg-[#2D2418] mt-[2px]" />
                </div>
                
                <div className="grid grid-cols-12 gap-3 flex-1 overflow-hidden">
                  <div className="col-span-12">
                    <h4 className="font-serif font-extrabold text-[15px] leading-tight tracking-tight text-[#111] mb-2 line-clamp-2">
                      Bahia atrai noivos de outras regiões do País para casarem no estado
                    </h4>
                  </div>
                  <div className="col-span-7">
                    <div className="aspect-[4/3] rounded-[15px] overflow-hidden border border-gray-100 bg-gray-50 h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" 
                        alt="Beach Wedding" 
                        className="w-full h-full object-cover grayscale-[15%]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col justify-between text-[9px] leading-relaxed text-gray-700 font-sans">
                    <div className="space-y-1.5 opacity-80">
                      <div className="h-1 bg-gray-300 rounded-none w-full" />
                      <div className="h-1 bg-gray-300 rounded-none w-full" />
                      <div className="h-1 bg-gray-300 rounded-none w-5/6" />
                      <p className="font-serif italic font-semibold text-[8px] text-[#2D2418]">No Litoral Norte da Bahia (Linha Verde)...</p>
                      <div className="h-1 bg-gray-300 rounded-none w-full" />
                      <div className="h-1 bg-gray-300 rounded-none w-3/4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Button */}
              <h3 className="font-serif text-white/90 group-hover:text-gold-weak transition-colors text-center text-base md:text-lg leading-snug mb-8 min-h-[56px] flex items-center justify-center px-4 tracking-wide">
                Reportagem no Jornal A Tarde com nossos diferenciais
              </h3>
              
              <a 
                href="https://atarde.com.br/bahia/destination-wedding-confira-dicas-para-casar-na-bahia-1240998" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-transparent border border-gold-weak text-gold-weak hover:bg-gold-strong hover:text-white hover:border-gold-strong font-sans font-bold tracking-widest text-[11px] uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer rounded-[15px]"
              >
                LER A MATÉRIA
              </a>
            </div>

            {/* CARD 2 - CORREIO */}
            <div className="bg-[#342a1c] border border-gold-strong/20 hover:border-gold-strong/40 rounded-[15px] p-8 flex flex-col justify-between hover:bg-[#3f3323] transition-all duration-300 group cursor-pointer hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold-strong to-gold-weak opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Mock Magazine Clipping */}
              <div className="bg-[#FCFAF7] p-5 text-[#2D2418] aspect-[4/3] rounded-[15px] overflow-hidden mb-8 border border-gold-border/20 shadow-none flex flex-col justify-between relative font-sans">
                <div className="border-b border-[#a12020]/20 pb-2 mb-2 flex justify-between items-center">
                  <span className="font-serif font-black text-xl italic text-red-700 tracking-tight">Correio<span className="text-gray-800 text-xs italic font-normal ml-0.5">*</span></span>
                  <span className="font-sans font-bold text-[8px] tracking-widest text-gray-500 uppercase">COLUNA VANESSA BRUNT</span>
                </div>
                
                <div className="grid grid-cols-12 gap-3 flex-1 overflow-hidden items-stretch">
                  <div className="col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] font-bold text-red-600 tracking-wider uppercase mb-1 block">EMPREENDEDORISMO</span>
                      <h4 className="font-serif font-black text-sm md:text-[15px] leading-tight text-ink tracking-tight mb-2">
                        Vai fazer um evento? Conheça empresas que vão organizar tudo para você
                      </h4>
                    </div>
                    <div className="space-y-1 text-[8px] text-gray-600">
                      <p className="font-medium text-ink">Assessora Completa & Destination Wedding com Lidiane Peralva.</p>
                      <div className="h-1 bg-gray-200 rounded-none w-full" />
                      <div className="h-1 bg-gray-200 rounded-none w-5/6" />
                    </div>
                  </div>
                  
                  <div className="col-span-5 flex flex-col items-center justify-center">
                    <div className="aspect-[4/5] rounded-[15px] overflow-hidden border-2 border-white shadow-md bg-white w-full h-[120%] -mt-2">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1Q_pzjrs0y5gaPx1wAKGqUCHWszOA4XKa" 
                        alt="Lidiane Peral" 
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Button */}
              <h3 className="font-serif text-white/90 group-hover:text-gold-weak transition-colors text-center text-base md:text-lg leading-snug mb-8 min-h-[56px] flex items-center justify-center px-4 tracking-wide">
                Matéria do Jornal Correio mostrando que somos a maior referência
              </h3>
              
              <a 
                href="https://www.correio24horas.com.br/colunistas/vanessa-brunt/vai-fazer-um-evento-conheca-empresas-que-vao-organizar-tudo-para-voce-0723" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-transparent border border-gold-weak text-gold-weak hover:bg-gold-strong hover:text-white hover:border-gold-strong font-sans font-bold tracking-widest text-[11px] uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer rounded-[15px]"
              >
                LER A MATÉRIA
              </a>
            </div>

            {/* CARD 3 - IBAHIA */}
            <div className="bg-[#342a1c] border border-gold-strong/20 hover:border-gold-strong/40 rounded-[15px] p-8 flex flex-col justify-between hover:bg-[#3f3323] transition-all duration-300 group cursor-pointer hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold-strong to-gold-weak opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Mock Portal clipping */}
              <div className="bg-white p-5 text-[#2D2418] aspect-[4/3] rounded-[15px] overflow-hidden mb-8 border border-gold-border/20 shadow-none flex flex-col justify-between font-sans relative">
                <div className="border-b border-indigo-100 pb-2 mb-3 flex justify-between items-center">
                  <span className="font-bold text-lg text-indigo-900 tracking-tighter">iBahia<span className="text-orange-500 font-extrabold">.</span></span>
                  <span className="font-sans font-bold text-[8px] tracking-widest text-[#A17C4F] uppercase">NÃO-ÓBVIO</span>
                </div>
                
                <div className="grid grid-cols-12 gap-3 flex-1 overflow-hidden">
                  <div className="col-span-12">
                    <span className="bg-amber-100 text-amber-800 text-[8px] font-bold px-2 py-0.5 rounded-none uppercase tracking-wider mb-1 inline-block">1º LUGAR NO RANKING</span>
                    <h4 className="font-serif font-black text-[14px] leading-tight text-[#111] mb-2 line-clamp-2">
                       Conheça 5 assessores de casamento para fazer o melhor evento dos seus sonhos
                    </h4>
                  </div>
                  
                  <div className="col-span-6">
                    <div className="aspect-square rounded-[15px] overflow-hidden border border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=300" 
                        alt="Elegant Flowers" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  <div className="col-span-6 flex flex-col justify-between">
                    <div className="aspect-[4/3] rounded-[15px] overflow-hidden border border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=300" 
                        alt="Elegant Dining Table" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-[8px] text-gray-500 font-medium text-right mt-1">
                      Destaque nacional em assessorar casamentos perfeitos.
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Button */}
              <h3 className="font-serif text-white/90 group-hover:text-gold-weak transition-colors text-center text-base md:text-lg leading-snug mb-8 min-h-[56px] flex items-center justify-center px-4 tracking-wide">
                Matéria do Portal iBahia em primeiro lugar no ranking
              </h3>
              
              <a 
                href="https://www.ibahia.com.br/colunistas/nao-obvio/conheca-5-assessores-de-casamento-para-fazer-o-melhor-evento-300813" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 bg-transparent border border-gold-weak text-gold-weak hover:bg-gold-strong hover:text-white hover:border-gold-strong font-sans font-bold tracking-widest text-[11px] uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer rounded-[15px]"
              >
                LER A MATÉRIA
              </a>
            </div>
          </div>

          {/* Central Call-to-Action Button */}
          <div className="mt-20 flex justify-center">
            <a 
              href="https://wa.me/5571996060083" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-linear-to-r from-gold-strong to-gold-weak text-white px-12 py-5 text-sm font-bold uppercase tracking-widest shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95 rounded-[15px] inline-flex items-center justify-center gap-3 cursor-pointer hover:scale-105"
            >
              Quero o Casamento Mais Inesquecível
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-paper border border-gold-border rounded-[15px] overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 md:p-20 bg-white border-r border-gold-border">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-8 text-gold-strong italic relative pb-4">
                Vamos planejar sua próxima viagem?
                <span className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold-strong to-gold-weak rounded-full w-24" />
              </h2>
              <p className="text-ink/85 text-sm md:text-base leading-relaxed mb-12 font-sans">
                Preencha o formulário ou fale diretamente com a nossa equipe através dos nossos canais oficiais.
              </p>
              
              <div className="space-y-8">
                <a 
                  href="https://wa.me/5571996060083" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex gap-6 items-center hover:text-gold-strong transition-colors group"
                >
                  <div className="p-4 border border-gold-strong/20 rounded-[15px] text-gold-strong group-hover:border-gold-strong transition-colors"><Phone size={24} /></div>
                  <div>
                    <h5 className="font-bold text-xs tracking-widest uppercase mb-1">WhatsApp</h5>
                    <p className="text-base md:text-lg font-bold text-ink group-hover:text-gold-strong transition-colors">+55 (71) 99606-0083</p>
                  </div>
                </a>
                <div className="flex gap-6 items-center">
                  <div className="p-4 border border-gold-strong/20 rounded-[15px] text-gold-strong"><Mail size={24} /></div>
                  <div>
                    <h5 className="font-bold text-xs tracking-widest uppercase mb-1">E-mail</h5>
                    <p className="text-base md:text-lg font-bold text-ink">contato@peralvaviagens.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20">
              <form className="grid grid-cols-1 gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-strong/85">Nome</label>
                    <input type="text" className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-base text-ink" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-strong/85">E-mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-base text-ink" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold-strong/85">Sua solicitação</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-base text-ink resize-none"></textarea>
                </div>
                <button className="bg-linear-to-r from-gold-strong to-gold-weak text-white px-10 py-5 text-sm font-bold uppercase tracking-widest shadow-xl transition-all hover:brightness-110 active:scale-95 text-center rounded-[15px]">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
          </>
        ) : (
          <WeddingPage onNavigate={handleNavigation} />
        )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gold-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 border-b border-gray-100 pb-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
              <span className="text-ink/60 flex flex-col gap-1">Instagram <span className="text-ink text-xs font-bold font-sans">@peralvaviagens</span></span>
              <span className="text-ink/60 flex flex-col gap-1">WhatsApp <a href="https://wa.me/5571996060083" target="_blank" rel="noopener noreferrer" className="text-ink text-xs font-bold font-sans hover:text-gold-strong transition-colors">+55 (71) 99606-0083</a></span>
            </div>
            <div className="order-first md:order-none">
              <img 
                src="https://lh3.googleusercontent.com/d/1oNtsRcQJ5bFfChIHy5GTtFweCbJbdwaD" 
                alt="Peralva Viagens Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-right">
              <span className="text-ink/60 flex flex-col gap-1">Atendimento <span className="text-ink text-xs font-bold font-sans">Consultivo VIP</span></span>
              <span className="text-ink/60 flex flex-col gap-1">Localização <span className="text-ink text-xs font-bold font-sans">Salvador - BA</span></span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 opacity-50">
            <span>© 2026 Peralva Viagens - Todos os direitos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-strong">Privacidade</a>
              <a href="#" className="hover:text-gold-strong">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5571996060083"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[200] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="currentColor" 
          className="w-6 h-6"
        >
          <path d="M12.003 2c-5.52 0-9.99 4.49-9.99 10.01 0 1.9.53 3.68 1.46 5.2L2.01 22.89l5.86-1.54c1.47.8 3.12 1.25 4.86 1.25 5.52 0 9.99-4.49 9.99-10.01S17.52 2 12.003 2zm-.03 16.79c-1.69 0-3.35-.45-4.81-1.3l-.34-.2-3.58.94.96-3.48-.22-.35c-.93-1.49-1.43-3.21-1.43-5 0-4.8 3.92-8.71 8.75-8.71 4.8 0 8.71 3.91 8.71 8.71s-3.91 8.71-8.71 8.71zm4.79-6.55c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.59-1.42-.81-1.95-.21-.52-.43-.45-.59-.46-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17 0 1.28.93 2.51 1.06 2.68.13.17 1.83 2.79 4.43 3.92.62.27 1.11.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.26-.17-.52-.3z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-semibold text-sm whitespace-nowrap">
          Fale Conosco
        </span>
      </motion.a>
    </div>
  </div>
  );
}
