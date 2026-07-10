import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  Clock,
  Compass,
  FileText
} from 'lucide-react';

const RESORTS = [
  {
    name: 'Grand Palladium',
    location: 'Imbassaí, BA',
    image: 'https://lh3.googleusercontent.com/d/1LzzgtDWIOYigU09Dg0sWn6hO2PxeRjgd',
    description: 'Localizado na exuberante reserva de Imbassaí, oferece harmonia perfeita entre dunas, rio e mar com serviços de alta gastronomia, conforto e exclusividade.'
  },
  {
    name: 'Iberostar Selection',
    location: 'Praia do Forte, BA',
    image: 'https://lh3.googleusercontent.com/d/1qHccjUP1RYzupeeX8UbRh7LRWc8R2TkC',
    description: 'Serviço All-Inclusive cinco estrelas com estrutura de lazer completa e cenários incríveis de frente para as praias preservadas baianas.'
  },
  {
    name: 'Vila Galá Marés',
    location: 'Camaçari, BA',
    image: 'https://lh3.googleusercontent.com/d/1V3Q95RCzbGTxN3KpehjStkgm1mNNIiAn',
    description: 'Localizado na deslumbrante praia de Guarajuba, oferece arquitetura integrada à natureza com imensa piscina e sofisticação para sua celebração.'
  },
  {
    name: 'Costa do Sauipe',
    location: 'Sauipe, BA',
    image: 'https://static.wixstatic.com/media/4de30d_04919a0866e64cf5809144e0b2959003~mv2.jpg/v1/crop/x_0,y_100,w_3000,h_1489/fill/w_1056,h_524,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fachada%20Terra%20Melhorada_edited.jpg',
    description: 'A megaestrutura de lazer e hospitalidade na Linha Verde. Diversas opções de cenários ao ar livre e praias ideais para receber seus convidados.'
  },
  {
    name: 'Tivoli Ecoresort',
    location: 'Praia do Forte, BA',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQDOsDRRiWads8cHHmZQQdULBsVr8QZa7wFSnig6c1rAiD5NvOO5p4ZqtpxUdNkErL9PjGUXbkR9UwzT9HRU3TOZuPMn3kL0T_u9-IkaSsHfgwlJEvbFpRjj82n6l8uCd7uNAp=s1360-w1360-h1020-rw',
    description: 'Um dos ecoresorts mais sofisticados do Brasil, ideal para casamentos elegantes com muito contato com a natureza e coqueirais deslumbrantes.'
  }
];

const FAQS = [
  {
    question: 'Com quanta antecedência devemos começar a planejar?',
    answer: 'O ideal para um Destination Wedding é iniciar o planejamento com 10 a 12 meses de antecedência. Isso garante as melhores tarifas aéreas e de hospedagem para os convidados, além de maior disponibilidade de datas nos resorts.'
  },
  {
    question: 'Como funciona o pagamento dos convidados?',
    answer: 'Nós cuidamos de toda a intermediação. Criamos tarifas de grupo bloqueadas com condições de parcelamento exclusivas. Cada convidado faz seu próprio atendimento e pagamento diretamente com a Peralva Viagens, sem nenhum estresse para os noivos.'
  },
  {
    question: 'A Peralva Viagens cuida da decoração e buffet?',
    answer: 'Nós cuidamos de toda a logística de viagem, turismo, passeios, hospedagem e coordenação geral com o hotel. Fornecemos suporte integral na seleção do resort e auxiliamos no contato com as equipes de eventos e assessores de casamento especializados locais.'
  },
  {
    question: 'Vocês dão benefícios ou mimos para os noivos?',
    answer: 'Sim! Dependendo do número de quartos reservados pelo grupo de convidados, os noivos podem ganhar cortesias de diárias, upgrades para suíte master, decoração especial no quarto, jantares românticos e descontos no SPA.'
  },
  {
    question: 'Como os convidados tiram dúvidas sobre a viagem?',
    answer: 'Disponibilizamos um concierge VIP exclusivo. Criamos um canal direto via WhatsApp para que todos os convidados possam tirar dúvidas sobre transporte, hospedagem, passeios, dress code e documentações.'
  }
];

interface WeddingPageProps {
  onNavigate: (page: 'home' | 'wedding', hash?: string) => void;
}

export default function WeddingPage({ onNavigate }: WeddingPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Form State
  const [noivos, setNoivos] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [destino, setDestino] = useState('Nordeste');
  const [convidados, setConvidados] = useState('50 a 100');
  const [periodo, setPeriodo] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noivos || !whatsapp) {
      alert('Por favor, preencha o nome dos noivos e o número de WhatsApp.');
      return;
    }

    const mensagem = `Olá Lidiane! Gostaria de planejar nosso Destination Wedding com a Peralva Viagens.\n\n` +
      `*Noivos:* ${noivos}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Destino de Interesse:* ${destino}\n` +
      `*Número Estimado de Convidados:* ${convidados}\n` +
      `*Período Desejado:* ${periodo || 'A definir'}\n` +
      `*Detalhes:* ${detalhes || 'Sem observações adicionais'}`;

    const waUrl = `https://wa.me/5571996060083?text=${encodeURIComponent(mensagem)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-paper min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1rwtYNO2fT3OPX--09fdR73zyGOJH7frl" 
            alt="Destination Wedding" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/35" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.3em] mb-4 block animate-fade-in">
            Experiências Únicas & Logística Impecável
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-cinzel mb-6 leading-tight tracking-tight">
            Destination Wedding <br />
            <span className="text-gold-weak italic font-normal">por Peralva Viagens</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-10">
            Diga o seu "Sim" em cenários extraordinários. Cuidamos de toda a logística e hospedagem dos convidados para que você se preocupe apenas em viver o dia mais feliz da sua vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#form-wedding"
              className="px-8 py-4 bg-gold-strong text-white rounded-[15px] font-bold tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all text-center border border-gold-strong w-full sm:w-auto"
            >
              Iniciar Planejamento
            </a>
            <a 
              href="https://wa.me/5571996060083?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20Destination%20Wedding%20com%20a%20Peralva%20Viagens."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/55 text-white rounded-[15px] font-bold tracking-widest text-[11px] uppercase hover:bg-white/10 transition-all text-center w-full sm:w-auto"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* --- INTRO & WHY DESTINATION WEDDING --- */}
      <section className="py-24 bg-white border-b border-gold-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.2em] block">
                Celebrações Prolongadas
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-ink font-serif font-bold leading-tight">
                Por que realizar um <br />
                <span className="text-gold-strong italic font-normal">Destination Wedding?</span>
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-gold-strong to-transparent w-24 my-4" />
              <p className="text-ink/80 text-sm md:text-base leading-relaxed font-sans">
                Ao contrário de uma festa tradicional de apenas poucas horas, o Destination Wedding transforma seu casamento em uma viagem de comemoração contínua que dura de 3 a 4 dias. É a oportunidade perfeita de unir as pessoas que você mais ama em uma atmosfera de férias, descontração e sofisticação.
              </p>
              <p className="text-ink/85 text-sm md:text-base leading-relaxed font-sans">
                Seja sob o pôr do sol exuberante das praias baianas ou nos resorts luxuosos de frente para o mar, organizamos toda a jornada para garantir conforto total aos noivos e familiares.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  'Mais tempo com os convidados',
                  'Integração e clima de férias',
                  'Cenários cinematográficos',
                  'Condições exclusivas de grupo'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold-strong shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-ink uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-[20px] overflow-hidden border border-gold-border shadow-lg relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1rwtYNO2fT3OPX--09fdR73zyGOJH7frl" 
                  alt="Noivos na Praia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-paper border border-gold-border rounded-[15px] p-6 max-w-[240px] shadow-lg hidden md:block">
                <Sparkles className="text-gold-strong mb-2" size={24} />
                <h4 className="font-serif font-bold text-xs text-ink uppercase tracking-wider mb-1">Inesquecível</h4>
                <p className="text-[11px] text-ink/75 leading-relaxed font-sans">Momentos desenhados sob medida para traduzir a história do casal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WEDDING SERVICES GRID --- */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-3 block">Nossa Assessoria</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-ink font-serif font-bold relative pb-4">
              Cuidamos de tudo para você
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-gold-strong to-gold-weak rounded-full w-24" />
            </h2>
            <p className="text-gray-600 text-xs md:text-sm mt-4 font-sans leading-relaxed">
              Damos suporte total aos noivos e coordenamos toda a jornada de viagem de seus convidados de forma extremamente consultiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: 'Curadoria de Resorts',
                desc: 'Selecionamos os melhores resorts que se alinham perfeitamente ao estilo do seu casamento, considerando infraestrutura, gastronomia e beleza cênica.'
              },
              {
                icon: Users,
                title: 'Atendimento RSVP VIP',
                desc: 'Criamos um canal de atendimento dedicado aos seus convidados para reservas, tira-dúvidas, organização de voos e suporte no local.'
              },
              {
                icon: Calendar,
                title: 'Negociação de Tarifas',
                desc: 'Garantimos tarifas de grupo com descontos exclusivos de bloqueios de quartos, condições de parcelamento facilitadas e mimos especiais aos noivos.'
              },
              {
                icon: Clock,
                title: 'Eventos Pré e Pós',
                desc: 'Criação de experiências complementares ao dia do Sim, como jantares de boas-vindas (welcome drinks), luau na praia e passeios em grupo pós-casamento.'
              },
              {
                icon: FileText,
                title: 'Logística Completa',
                desc: 'Organizamos todas as passagens aéreas e traslados privados entre aeroporto e hotel para que toda a família viaje com total conforto.'
              },
              {
                icon: Heart,
                title: 'Suporte Exclusivo',
                desc: 'Sua assessora de turismo dedicada cuidará de cada detalhe técnico da viagem para que vocês aproveitem a jornada com tranquilidade.'
              }
            ].map((srv, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gold-border rounded-[15px] p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-gold-strong/5 border border-gold-strong/20 flex items-center justify-center text-gold-strong mb-6 group-hover:bg-gold-strong group-hover:text-white transition-all duration-500">
                    <srv.icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-sm md:text-base lg:text-lg text-ink uppercase tracking-wider mb-3">{srv.title}</h3>
                  <p className="text-ink/80 text-xs md:text-sm leading-relaxed font-sans">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESORTS DETAILED GALLERY --- */}
      <section className="py-24 bg-white border-t border-b border-gold-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-3 block">Cenários de Casamento</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-ink font-serif font-bold relative pb-4">
              Os Resorts Mais Desejados
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-gold-strong to-gold-weak rounded-full w-24" />
            </h2>
            <p className="text-gray-600 text-xs md:text-sm mt-4 font-sans leading-relaxed">
              Conheça os cenários espetaculares na Bahia onde transformamos sonhos em memórias inesquecíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESORTS.map((resort, idx) => {
              const msg = `Olá! Gostaria de solicitar um orçamento para meu casamento no resort *${resort.name}* (${resort.location}).`;
              const waUrl = `https://wa.me/5571996060083?text=${encodeURIComponent(msg)}`;
              return (
                <div 
                  key={idx}
                  className="bg-paper border border-gold-border rounded-[15px] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-gold-border">
                    <img 
                      src={resort.image} 
                      alt={resort.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 bg-ink/85 backdrop-blur-xs text-[10px] text-white px-3 py-1 font-bold tracking-widest uppercase rounded-full">
                      {resort.location}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-sm md:text-base text-ink mb-3 group-hover:text-gold-strong transition-colors">{resort.name}</h3>
                      <p className="text-ink/75 text-xs md:text-sm leading-relaxed font-sans mb-6">{resort.description}</p>
                    </div>
                    <a 
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 border border-gold-border text-gold-strong font-sans font-bold tracking-widest text-[10px] uppercase transition-all hover:bg-gold-strong hover:text-white hover:border-gold-strong text-center rounded-[10px] block cursor-pointer"
                    >
                      SOLICITAR ORÇAMENTO NO WHATSAPP
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE BRIEFING FORM --- */}
      <section id="form-wedding" className="py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gold-border rounded-[20px] shadow-sm overflow-hidden p-8 md:p-16">
            <div className="text-center mb-12">
              <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-2 block">Seu Casamento Começa Aqui</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4">Inicie o seu Planejamento</h2>
              <p className="text-ink/75 text-xs md:text-sm font-sans max-w-lg mx-auto leading-relaxed">
                Preencha as informações iniciais abaixo para que nossa equipe monte uma proposta conceitual e personalizada de Destination Wedding.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500 mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif font-bold text-xl text-ink">Formulário Enviado com Sucesso!</h3>
                <p className="text-ink/80 text-sm max-w-md mx-auto font-sans leading-relaxed">
                  As informações de seu casamento foram enviadas. Abrimos uma conversa direta no WhatsApp com a assessora Lidiane para darmos continuidade ao seu sonho.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-gold-strong hover:text-gold-weak uppercase tracking-widest"
                  >
                    Preencher Novo Formulário
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">Nome dos Noivos *</label>
                    <input 
                      type="text" 
                      required
                      value={noivos}
                      onChange={(e) => setNoivos(e.target.value)}
                      placeholder="Ex: Mariana & Roberto"
                      className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">WhatsApp para Contato *</label>
                    <input 
                      type="tel" 
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (71) 99999-9999"
                      className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">Destino de Interesse</label>
                    <select 
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                      className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink"
                    >
                      <option value="Nordeste (Bahia, Ceará, etc)">Nordeste (Bahia, Ceará, etc)</option>
                      <option value="Caribe (Cancun, Punta Cana)">Caribe (Cancun, Punta Cana)</option>
                      <option value="Europa (Toscana, Portugal)">Europa (Toscana, Portugal)</option>
                      <option value="Outros">Outros Destinos</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">Nº de Convidados Estimado</label>
                    <select 
                      value={convidados}
                      onChange={(e) => setConvidados(e.target.value)}
                      className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink"
                    >
                      <option value="Até 50 convidados (Elopement/Mini Wedding)">Até 50 convidados (Mini Wedding)</option>
                      <option value="50 a 100 convidados">50 a 100 convidados</option>
                      <option value="100 a 200 convidados">100 a 200 convidados</option>
                      <option value="Mais de 200 convidados">Mais de 200 convidados</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">Período Desejado (Mês/Ano Estimado)</label>
                  <input 
                    type="text" 
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value)}
                    placeholder="Ex: Novembro de 2026"
                    className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-strong">Conte-nos um pouco sobre o casamento dos seus sonhos</label>
                  <textarea 
                    rows={4} 
                    value={detalhes}
                    onChange={(e) => setDetalhes(e.target.value)}
                    placeholder="Conte sobre o estilo que preferem, se desejam pé na areia, capela, e outras particularidades..."
                    className="w-full bg-transparent border-b border-gold-border py-2 focus:border-gold-strong outline-hidden transition-all text-sm md:text-base text-ink resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-linear-to-r from-gold-strong to-gold-weak text-white py-5 text-sm font-bold uppercase tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all text-center rounded-[15px] cursor-pointer"
                >
                  ENVIAR BRIEFING E FALAR NO WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white border-t border-gold-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-strong text-xs md:text-sm uppercase font-bold tracking-[0.25em] mb-2 block">Dúvidas Frequentes</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink">Perguntas Comuns</h2>
            <div className="h-[2px] bg-gradient-to-r from-gold-strong to-transparent w-24 mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gold-border rounded-[15px] overflow-hidden bg-paper transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center font-serif font-bold text-xs md:text-sm text-ink uppercase tracking-wider cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <HelpCircle 
                    size={18} 
                    className={`text-gold-strong transition-transform duration-300 ${openFaqIdx === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="px-6 pb-6 text-xs md:text-sm leading-relaxed text-ink/80 font-sans border-t border-gold-border/20 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => onNavigate('home', 'contato')}
              className="text-xs font-bold text-gold-strong hover:text-gold-weak uppercase tracking-widest inline-flex items-center gap-2"
            >
              Ficou com mais alguma dúvida? Fale Conosco <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
