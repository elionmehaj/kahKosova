import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function LandLeasing() {
  const properties = [
    {
      id: 1,
      title: "Tokë Pjellore Bujqësore",
      location: "Komuna e Ferizajt",
      hectares: 2.5,
      price: "€150/muaj",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
    },
    {
      id: 2,
      title: "Parcelë Komerciale afër Autostradës",
      location: "Fushë Kosovë",
      hectares: 1.2,
      price: "€450/muaj",
      image: "https://images.unsplash.com/photo-1464047736614-af6ac68163f4?w=800&q=80"
    },
    {
      id: 3,
      title: "Tokë për Pemëtore me Qasje në Ujë",
      location: "Gjakovë",
      hectares: 4.0,
      price: "€200/muaj",
      image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&q=80"
    },
    {
      id: 4,
      title: "Parcelë Rurale për Zhvillim",
      location: "Prizren",
      hectares: 0.8,
      price: "€100/muaj",
      image: "https://images.unsplash.com/photo-1623838634125-9c869c9b0e27?w=800&q=80"
    }
  ];

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] pt-20">
        {/* Left Side: List */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 lg:overflow-y-auto lg:h-[calc(100vh-80px)] border-r border-white/5 bg-background">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-white mb-2">Toka</h1>
            <p className="text-white/60 text-sm">Gjeni tokë bujqësore ose komerciale me qira në Kosovë.</p>
          </div>

          <div className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input 
                placeholder="Kërko sipas komunës..." 
                className="pl-9 bg-white/5 border-white/10 text-white h-11 rounded-xl focus:border-primary"
              />
            </div>
            <Button variant="outline" className="h-11 px-4 border-white/10 text-white hover:bg-white/5 rounded-xl">
              <Filter className="w-4 h-4 mr-2" /> Filtrat
            </Button>
          </div>

          <div className="space-y-4">
            {properties.map(p => (
              <div key={p.id} className="bg-card border border-white/5 rounded-2xl p-4 flex gap-5 hover:border-white/20 transition-all cursor-pointer group shadow-md">
                <div className="w-32 h-28 rounded-xl overflow-hidden shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <h3 className="font-bold text-white text-lg leading-tight mb-1">{p.title}</h3>
                  <div className="flex items-center text-white/50 text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> {p.location}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="bg-white/5 px-2.5 py-1 rounded-md text-xs font-medium text-white/80 border border-white/10">
                      {p.hectares} Hektarë
                    </div>
                    <span className="font-display font-bold text-primary">{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map Placeholder */}
        <div className="hidden lg:block w-1/2 relative bg-[#1a1c23] overflow-hidden">
          {/* Subtle grid pattern to look like a map background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-sm">Pamja e Hartës Interaktive</p>
            <p className="text-white/30 text-xs mt-2 max-w-xs text-center">Harta do të ngarkohet këtu. U gjetën 4 prona në fushëpamjen aktuale.</p>
          </div>

          {/* Fake Pins */}
          <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(357,76%,50%,0.5)] border-2 border-white/20" />
          <div className="absolute top-[45%] left-[60%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(357,76%,50%,0.5)] border-2 border-white/20" />
          <div className="absolute top-[60%] left-[35%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(357,76%,50%,0.5)] border-2 border-white/20" />
          <div className="absolute top-[75%] left-[50%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(357,76%,50%,0.5)] border-2 border-white/20" />
        </div>
      </div>
    </MainLayout>
  );
}