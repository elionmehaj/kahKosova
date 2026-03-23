import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Leaf, Cpu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

export default function Investime() {
  const { toast } = useToast();

  const projects = [
    {
      name: "Rezidenca Dardania",
      category: "Pasuri e Paluajtshme",
      icon: Building2,
      progress: 75,
      funded: "€75k nga €100k",
      roi: "10% / vit",
      min: "€1,000"
    },
    {
      name: "AgriTech Kosovo",
      category: "Bujqësi",
      icon: Leaf,
      progress: 40,
      funded: "€20k nga €50k",
      roi: "18% / vit",
      min: "€500"
    },
    {
      name: "Solar Kosova",
      category: "Teknologji",
      icon: Cpu,
      progress: 60,
      funded: "€120k nga €200k",
      roi: "15% / vit",
      min: "€750"
    },
    {
      name: "Hotel Rugova",
      category: "Turizëm",
      icon: Building2,
      progress: 25,
      funded: "€50k nga €200k",
      roi: "20% / vit",
      min: "€2,000"
    }
  ];

  const handleInvest = (name: string) => {
    toast({
      title: "Interesim i regjistruar",
      description: `Ekipi ynë do t'ju kontaktojë për detajet e investimit në ${name}.`,
    });
  };

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <TrendingUp className="w-4 h-4" /> Investime
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Investoni në Kosovë</h1>
          <p className="text-lg text-white/60">
            Mbështesni ekonominë lokale dhe përfitoni kthim të qëndrueshëm. Zbuloni projekte të verifikuara nga sipërmarrës dhe biznese kosovare.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">Projekte Aktive</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {projects.map((p, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all flex flex-col shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <p.icon className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">{p.name}</h3>
                  <span className="text-xs text-primary font-medium">{p.category}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Mbledhur</span>
                    <span className="text-white font-medium">{p.funded}</span>
                  </div>
                  <Progress value={p.progress} className="h-2 bg-white/10" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-white/40 text-xs mb-1">ROI i Parashikuar</p>
                    <p className="text-emerald-400 font-bold">{p.roi}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-white/40 text-xs mb-1">Investimi Min.</p>
                    <p className="text-white font-bold">{p.min}</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleInvest(p.name)}
                className="w-full mt-auto bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20"
              >
                Investo Tani
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-bold text-white">Të Gjitha Projektet</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5 border-b border-white/10">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-white/60">Projekti</TableHead>
                  <TableHead className="text-white/60">Kategoria</TableHead>
                  <TableHead className="text-white/60">ROI i Parashikuar</TableHead>
                  <TableHead className="text-white/60">Investimi Minimal</TableHead>
                  <TableHead className="text-white/60">Statusi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((p, i) => (
                  <TableRow key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <TableCell className="font-medium text-white">{p.name}</TableCell>
                    <TableCell className="text-white/70">{p.category}</TableCell>
                    <TableCell className="text-emerald-400 font-medium">{p.roi}</TableCell>
                    <TableCell className="text-white/70">{p.min}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Aktiv
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}