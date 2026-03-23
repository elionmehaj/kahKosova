import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Heart, Star, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Shendeti() {
  const { toast } = useToast();
  const [city, setCity] = useState("Prishtinë");
  const [clinicType, setClinicType] = useState("E Përgjithshme");

  const clinics = [
    {
      name: "Klinika Amerikan-Kosovare",
      city: "Prishtinë",
      services: ["Kontrolla të përgjithshme", "Laborator", "Imazheri"],
      rating: 4.8,
      price: "€20–€80 / vizitë"
    },
    {
      name: "Dental Pro Prishtinë",
      city: "Prishtinë",
      services: ["Stomatologji", "Ortodonci", "Implantologji"],
      rating: 4.7,
      price: "€30–€150 / vizitë"
    },
    {
      name: "Klinika Kardio Plus",
      city: "Prizren",
      services: ["Kardiologji", "EKG", "Ekokardiografi"],
      rating: 4.9,
      price: "€40–€100 / vizitë"
    },
    {
      name: "Qendra Shëndetësore Familja",
      city: "Gjakovë",
      services: ["Pediatri", "Gjinekologji", "Mjekësi familjare"],
      rating: 4.6,
      price: "€15–€50 / vizitë"
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Rezervimi u dërgua",
      description: "Do t'ju kontaktojmë së shpejti për konfirmim.",
    });
  };

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Heart className="w-4 h-4" /> Shëndeti
          </div>
          <h1 className="text-4xl font-display font-bold text-white mb-4">Kujdesi Shëndetësor për Familjen</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Rezervoni kontrollime mjekësore ose boni farmaci për të afërmit tuaj në Kosovë.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-card border border-white/5 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Filtro</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-white/80 mb-2 block">Qyteti</Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white w-full rounded-xl">
                      <SelectValue placeholder="Zgjidh qytetin" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10 text-white">
                      <SelectItem value="Prishtinë">Prishtinë</SelectItem>
                      <SelectItem value="Prizren">Prizren</SelectItem>
                      <SelectItem value="Gjakovë">Gjakovë</SelectItem>
                      <SelectItem value="Pejë">Pejë</SelectItem>
                      <SelectItem value="Ferizaj">Ferizaj</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white/80 mb-2 block">Lloji i Klinikës</Label>
                  <Select value={clinicType} onValueChange={setClinicType}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white w-full rounded-xl">
                      <SelectValue placeholder="Zgjidh llojin" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10 text-white">
                      <SelectItem value="E Përgjithshme">E Përgjithshme</SelectItem>
                      <SelectItem value="Dentare">Dentare</SelectItem>
                      <SelectItem value="Kardiologji">Kardiologji</SelectItem>
                      <SelectItem value="Pediatri">Pediatri</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinics.map((clinic, idx) => (
              <div key={idx} className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{clinic.name}</h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-white/70 text-xs font-medium border border-white/10">
                      <MapPin className="w-3.5 h-3.5" /> {clinic.city}
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400 font-bold bg-yellow-400/10 px-2 py-1 rounded-lg text-sm">
                    <Star className="w-4 h-4 mr-1 fill-current" /> {clinic.rating}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {clinic.services.map((s, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" /> {s}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm font-medium text-white/80">{clinic.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                        Rezervo Termin
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-white/10 text-white sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Rezervo Termin në {clinic.name}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4 pt-4">
                        <div>
                          <Label>Emri i të afërmit</Label>
                          <Input required className="mt-1.5 bg-white/5 border-white/10" placeholder="Shkruani emrin" />
                        </div>
                        <div>
                          <Label>Numri i telefonit në Kosovë</Label>
                          <Input required className="mt-1.5 bg-white/5 border-white/10" placeholder="+383 4X XXX XXX" />
                        </div>
                        <div>
                          <Label>Data e preferuar</Label>
                          <Input required type="date" className="mt-1.5 bg-white/5 border-white/10 [color-scheme:dark]" />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-4 h-12">
                          Konfirmo Rezervimin
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}