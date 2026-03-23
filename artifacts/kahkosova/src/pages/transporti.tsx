import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Car, Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Transporti() {
  const { toast } = useToast();

  const cars = [
    {
      name: "Toyota Corolla 2023",
      type: "Automatik",
      fuel: "Hibrid",
      seats: "5 Ulëse",
      price: "€35/ditë",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80"
    },
    {
      name: "Mercedes C-Class 2022",
      type: "Automatik",
      fuel: "Diesel",
      seats: "5 Ulëse",
      price: "€55/ditë",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
    },
    {
      name: "VW Golf 2023",
      type: "Manual",
      fuel: "Benzinë",
      seats: "5 Ulëse",
      price: "€30/ditë",
      image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80"
    },
    {
      name: "BMW X3 2022",
      type: "Automatik",
      fuel: "Diesel",
      seats: "5 Ulëse",
      price: "€65/ditë",
      image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Duke kërkuar...",
      description: "Po shfaqim rezultatet e përditësuara për datat e zgjedhura.",
    });
  };

  const handleBook = (car: string) => {
    toast({
      title: "Rezervimi filloi",
      description: `Ju keni zgjedhur ${car}. Do t'ju ridrejtojmë tek pagesa.`,
    });
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Form */}
        <div className="bg-card border border-white/5 rounded-3xl p-8 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Rezervoni Transportin Tuaj</h1>
                <p className="text-white/60">Rent-a-car i besueshëm për vizitën tuaj në Kosovë</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label className="text-white/80">Destinacioni</Label>
                <Select defaultValue="prishtine">
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
                    <MapPin className="w-4 h-4 mr-2 text-white/40" />
                    <SelectValue placeholder="Zgjidh qytetin" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 text-white">
                    <SelectItem value="prishtine">Aeroporti PRN (Prishtinë)</SelectItem>
                    <SelectItem value="prizren">Prizren</SelectItem>
                    <SelectItem value="peje">Pejë</SelectItem>
                    <SelectItem value="gjakove">Gjakovë</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-white/80">Marrja</Label>
                <Input required type="date" className="bg-white/5 border-white/10 text-white h-12 rounded-xl [color-scheme:dark]" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/80">Kthimi</Label>
                <Input required type="date" className="bg-white/5 border-white/10 text-white h-12 rounded-xl [color-scheme:dark]" />
              </div>
              <Button type="submit" className="h-12 w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                <Search className="w-5 h-5 mr-2" /> Kërko
              </Button>
            </form>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <div key={idx} className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-2.5 py-1 rounded-md">
                    {car.type}
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-2.5 py-1 rounded-md">
                    {car.fuel}
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-2.5 py-1 rounded-md">
                    {car.seats}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="font-display font-bold text-primary text-lg">{car.price}</span>
                  <Button onClick={() => handleBook(car.name)} className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl">
                    Rezervo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
}