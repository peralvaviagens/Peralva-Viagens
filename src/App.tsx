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
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  BookOpen
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Data ---
const SERVICES = [
  { id: 1, title: 'Pacotes Nacionais', icon: MapPin, description: 'Explore o melhor do Brasil com conforto.' },
  { id: 2, title: 'Pacotes Internacionais', icon: Globe, description: 'Destinos incríveis ao redor do mundo.' },
  { id: 3, title: 'Roteiros Personalizados', icon: Palmtree, description: 'Viagens moldadas ao seu estilo único.' },
  { id: 4, title: 'Casamentos e Lua de Mel', icon: Heart, description: 'Momentos inesquecíveis em cenários épicos.' },
];

const PACKAGES = [
  { 
    title: 'Nacionais', 
    description: 'Explore o melhor do Brasil com conforto e praticidade.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Internacionais', 
    description: 'Descubra destinos incríveis com roteiros completos.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Personalizados', 
    description: 'Criamos sua viagem do zero, do jeito que imaginou.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800'
  }
];

const NAV_LINKS = [
  { name: 'Início', href: '#inicio', icon: Home },
  { name: 'Quem Somos', href: '#quem-somos', icon: Users },
  { name: 'Serviços', href: '#pacotes', icon: Briefcase },
  { name: 'Casamentos', href: '#casamentos', icon: Heart },
  { name: 'Blog', href: '#blog', icon: BookOpen },
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

// --- Components ---

const Navbar = () => {
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
        <div className="flex items-center gap-4">
          <img 
            src="https://lh3.googleusercontent.com/d/1oNtsRcQJ5bFfChIHy5GTtFweCbJbdwaD" 
            alt="Peralva Viagens Logo" 
            className="h-10 w-auto md:h-12 object-contain"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden lg:flex gap-8 text-[11px] font-semibold uppercase tracking-widest ${isScrolled ? 'text-ink' : 'text-[#A17C4F]'}`}>
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-gold-strong transition-colors flex items-center gap-2"
            >
              <link.icon size={14} className="opacity-70" />
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contato" className={`hidden lg:flex items-center justify-center btn-pill h-10 ${isScrolled ? 'text-ink' : 'text-[#A17C4F] border-[#A17C4F] hover:bg-[#A17C4F] hover:text-white'}`}>
            Planeje sua Viagem
          </a>
          
          <button className="lg:hidden cursor-pointer" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={isScrolled ? 'text-ink' : 'text-[#A17C4F]'} />
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
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-5 py-5 border-b border-gold-border/20 hover:text-gold-strong transition-colors"
              >
                <link.icon size={20} className="text-gold-strong" />
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-5 py-5 border-b border-gold-border/20 hover:text-gold-strong transition-colors"
            >
              <Mail size={20} className="text-gold-strong" />
              Contato
            </a>
          </div>

          <div className="mt-12">
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block bg-[#A17C4F] text-white py-5 px-10 text-[11px] font-bold tracking-[0.3em] uppercase w-full text-center"
            >
              Planeje sua Viagem
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, highlight, subtitle, center = true }: { title: string, highlight?: string, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl mb-4 font-serif leading-tight">
      {highlight && <span className="block text-gold-strong mb-2 italic font-normal text-xl">{highlight}</span>}
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-paper">
      <div className="min-h-screen flex flex-col">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-strong origin-left z-[100]" style={{ scaleX }} />
        
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-paper">
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-3xl lg:text-4xl text-[#A17C4F] font-cinzel mb-8 leading-[1.15] tracking-tight"
            >
              Viagens que começam com um sonho e terminam em <span className="italic font-normal">memórias inesquecíveis</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#A17C4F]/70 text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto font-semibold"
            >
              Pacotes nacionais e internacionais + roteiros exclusivos para casamentos
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center"
            >
              <a href="#contato" className="px-8 md:px-12 py-5 bg-[#A17C4F] text-white rounded-none font-bold tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Planeje sua Viagem <ChevronRight size={14} />
              </a>
              <a href="#pacotes" className="px-8 md:px-12 py-5 bg-transparent border border-[#A17C4F]/40 text-[#A17C4F] rounded-none font-bold tracking-widest text-[11px] uppercase hover:bg-[#A17C4F]/5 transition-all cursor-pointer">
                Conheça nossos destinos
              </a>
            </motion.div>
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
            <p className="text-ink/80 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Na Peralva Viagens, cada roteiro é pensado sob medida. Seja para férias, lua de mel ou um destination wedding, criamos experiências que fazem sentido para você.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((s, idx) => (
                <motion.div 
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-3 p-6 bg-paper rounded-none border border-gold-border hover:bg-white transition-colors group cursor-pointer"
                >
                  <div className="text-gold-strong transition-colors duration-300">
                    <s.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest">{s.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800" 
                alt="Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-10 gold-bg rounded-[2rem] shadow-xl text-white hidden lg:block">
              <p className="text-3xl font-serif mb-1 italic">+10 anos</p>
              <p className="text-xs font-bold tracking-widest uppercase">Criando memórias</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WEDDING HIGHLIGHT --- */}
      <section id="casamentos" className="py-24 relative bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gold-border overflow-hidden relative min-h-[600px] flex items-center shadow-sm">
            <div className="grid lg:grid-cols-2 w-full">
              <div className="p-12 md:p-20 relative z-10 flex flex-col justify-center border-r border-gold-border">
                <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-10 font-serif text-7xl pointer-events-none italic">Wedding</div>
                <span className="text-gold-strong text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Destination Wedding</span>
                <h2 className="text-4xl md:text-5xl text-ink font-serif mb-6 leading-tight">
                  Planejamento sem preocupações para o seu grande dia.
                </h2>
                <p className="text-ink/70 text-sm leading-relaxed mb-8 max-w-lg">
                  Cuidamos da logística dos convidados, hospedagem e experiências pré e pós-casamento, traduzindo o estilo do casal em cada detalhe.
                </p>
                <div className="flex">
                  <button className="bg-linear-to-r from-gold-strong to-gold-weak text-white px-10 py-4 text-xs font-bold uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95">
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
        </div>
      </section>

      {/* --- QUEM SOMOS --- */}
      <section id="quem-somos" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader 
            title="A Peralva Viagens nasceu com o propósito de transformar viagens em experiências únicas."
            highlight="Quem Somos"
          />
          <p className="text-gray-600 text-xl leading-relaxed mb-16">
            Com expertise em turismo nacional e internacional, oferecemos atendimento personalizado e cuidamos de cada etapa do seu planejamento — desde a escolha do destino até o seu retorno.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Atendimento Próximo', icon: Phone, desc: 'Suporte humanizado em todas as etapas.' },
              { title: 'Roteiros sob Medida', icon: MapPin, desc: 'Planejamento exclusivo para seu perfil.' },
              { title: 'Parcerias Confiáveis', icon: Globe, desc: 'Curadoria dos melhores parceiros globais.' },
            ].map((d, idx) => (
              <div key={idx} className={`p-8 border border-gray-100 rounded-3xl hover:border-gold-weak transition-all group flex flex-col items-center ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 text-gold-strong group-hover:bg-gold-strong group-hover:text-white transition-all">
                  <d.icon size={26} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{d.title}</h4>
                <p className="text-gray-500 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PACKAGES --- */}
      <section id="pacotes" className="py-24 bg-white border-t border-b border-gold-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Descubra o próximo destino"
            highlight="Pacotes"
            subtitle="Explore nossas categorias e encontre a viagem que mais combina com você."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg, idx) => (
              <motion.div 
                key={idx}
                className={`flex flex-col border-gold-border bg-white transition-colors duration-500 hover:bg-paper ${idx !== (PACKAGES.length - 1) ? 'lg:border-r' : ''} ${idx % 2 === 0 ? 'md:border-r lg:border-r' : 'md:border-r-0 lg:border-r'}`}
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-gold-border">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full border border-gold-strong flex items-center justify-center mb-6 text-gold-strong font-serif text-sm">{idx + 1}</div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">{pkg.title}</h3>
                    <p className="text-ink/60 text-xs leading-relaxed mb-8">{pkg.description}</p>
                  </div>
                  <button className="text-gold-strong font-bold tracking-widest text-[10px] uppercase border-b border-gold-strong w-fit pb-1 transition-all hover:pr-4">
                    Ver Opções
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOG --- */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-lg">
              <SectionHeader 
                title="Inspirações para sua próxima viagem"
                highlight="Blog"
                center={false}
              />
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold tracking-widest text-xs uppercase mb-16">
              Ver todos os artigos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <span className="text-gold-strong text-xs font-bold uppercase tracking-widest mb-3 block">{post.category}</span>
                <h4 className="text-xl font-serif leading-snug group-hover:text-gold-strong transition-colors mb-2">{post.title}</h4>
                <p className="text-ink/60 text-sm leading-relaxed line-clamp-2">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-paper border border-gold-border overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 md:p-20 bg-white border-r border-gold-border">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gold-strong italic">Vamos planejar sua próxima viagem?</h2>
              <p className="text-ink/70 text-sm leading-relaxed mb-12">
                Preencha o formulário ou fale diretamente com a nossa equipe através dos nossos canais oficiais.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="p-3 border border-gold-strong/20 rounded-none text-gold-strong"><Phone size={20} /></div>
                  <div>
                    <h5 className="font-bold text-[10px] tracking-widest uppercase mb-1">WhatsApp</h5>
                    <p className="text-sm font-semibold text-ink">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="p-3 border border-gold-strong/20 rounded-none text-gold-strong"><Mail size={20} /></div>
                  <div>
                    <h5 className="font-bold text-[10px] tracking-widest uppercase mb-1">E-mail</h5>
                    <p className="text-sm font-semibold text-ink">contato@peralvaviagens.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20">
              <form className="grid grid-cols-1 gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Nome</label>
                    <input type="text" className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">E-mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Sua solicitação</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm resize-none"></textarea>
                </div>
                <button className="bg-linear-to-r from-gold-strong to-gold-weak text-white px-10 py-5 text-xs font-bold uppercase tracking-widest shadow-xl transition-all hover:brightness-110 active:scale-95 text-center">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gold-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-12 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 border-b border-gray-100 pb-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
              <span className="text-ink/60 flex flex-col gap-1">Instagram <span className="text-ink text-xs font-bold font-sans">@peralvaviagens</span></span>
              <span className="text-ink/60 flex flex-col gap-1">WhatsApp <span className="text-ink text-xs font-bold font-sans">+55 71 99704-3711</span></span>
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
        href="https://wa.me/5571997043711"
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
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-semibold text-sm whitespace-nowrap">
          Fale Conosco
        </span>
      </motion.a>
    </div>
  </div>
  );
}
