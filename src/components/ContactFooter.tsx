"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypewriterHeading from "./TypewriterHeading";
import NetworkBackground from "./NetworkBackground";

export default function ContactFooter() {
  const containerRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-elem", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const resp = await emailjs.send(
        "service_wzy7cnd",       
        "template_9ocnuvt",      
        formData,
        "_G4gr8utuCB-Am5k_"      
      );

      if (resp.status === 200) {
        setSent(true);
        setError(false);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer ref={containerRef} id="contact" className="w-full relative py-32 px-6 md:px-16 bg-obsidian overflow-hidden">
      
      {/* Background Abstract */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <NetworkBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-[#0A0A0F] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-5xl md:text-7xl text-ivory tracking-tight mb-4">
            <TypewriterHeading text="Vamos " />
            <span className="text-champagne italic font-drama">
              <TypewriterHeading text="Conversar?" delay={0.4} />
            </span>
          </h2>
          <p className="text-ivory/60 text-lg max-w-xl mx-auto">
            Tem um projeto desafiador ou uma oportunidade? Mande uma mensagem e responderei o mais rápido possível.
          </p>
        </div>

        {/* Central Floating Glass Card */}
        <div className="w-full footer-elem bg-slate/30 backdrop-blur-2xl border border-champagne/20 rounded-[3rem] p-8 md:p-16 shadow-[0_0_50px_rgba(201,168,76,0.05)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Info Column */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-3xl text-ivory mb-8">Informações de Contato</h3>
                
                <div className="space-y-8">
                  <a href="mailto:jeffersonrezende2007@gmail.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                    <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                      <Mail className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ivory/40 uppercase tracking-widest mb-1">E-mail</div>
                      <div className="font-sans text-ivory text-lg group-hover:text-champagne transition-colors">jeffersonrezende2007@gmail.com</div>
                    </div>
                  </a>

                  <a href="tel:11981008159" className="flex items-center gap-6 group cursor-pointer w-fit">
                    <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                      <Phone className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ivory/40 uppercase tracking-widest mb-1">Telefone / WhatsApp</div>
                      <div className="font-sans text-ivory text-lg group-hover:text-champagne transition-colors">(11) 98100-8159</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-champagne" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ivory/40 uppercase tracking-widest mb-1">Localização</div>
                      <div className="font-sans text-ivory text-lg">Barueri - SP | Híbrido</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-ivory/10 flex gap-4">
                <a href="https://linkedin.com/in/jefferson-rezende-a944b7385/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-champagne hover:text-obsidian hover:border-champagne transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/jeffersonrezende2007" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-champagne hover:text-obsidian hover:border-champagne transition-all">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div>
              {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-ivory/50 uppercase tracking-widest">Nome</label>
                    <input 
                      name="name" 
                      type="text" 
                      required
                      placeholder="Seu nome"
                      className="w-full bg-obsidian/50 border-b-2 border-ivory/10 px-4 py-4 text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-champagne transition-colors font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-ivory/50 uppercase tracking-widest">E-mail</label>
                    <input 
                      name="email" 
                      type="email" 
                      required
                      placeholder="voce@email.com"
                      className="w-full bg-obsidian/50 border-b-2 border-ivory/10 px-4 py-4 text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-champagne transition-colors font-sans"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="font-mono text-xs text-ivory/50 uppercase tracking-widest">Mensagem</label>
                    <textarea 
                      name="message" 
                      required
                      rows={4}
                      placeholder="Como posso te ajudar?"
                      className="w-full bg-obsidian/50 border-b-2 border-ivory/10 px-4 py-4 text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-champagne transition-colors font-sans resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-ivory text-obsidian font-bold font-sans px-8 py-5 rounded-xl hover:bg-champagne transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading ? "Enviando..." : (
                      <>
                        Enviar Mensagem <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  {error && <p className="text-red-400 text-sm text-center">Ocorreu um erro. Tente novamente.</p>}
                </form>
              ) : (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-sans font-bold text-3xl text-ivory mb-2">Mensagem Enviada!</h3>
                  <p className="text-ivory/60 mb-8">Obrigado pelo contato. Em breve retornarei.</p>
                  <button onClick={() => setSent(false)} className="text-champagne font-mono text-sm uppercase tracking-widest hover:underline">
                    Enviar nova mensagem
                  </button>
                </div>
              )}
            </div>
            
          </div>
        </div>

        <div className="footer-elem mt-24 text-ivory/30 font-mono text-sm">
          © {new Date().getFullYear()} Jefferson Rezende.
        </div>
      </div>
    </footer>
  );
}
