import { Link } from "wouter";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Gift, FileText, ArrowRight, ShieldCheck, Globe, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract/Dark Wash Background overlaying an Unsplash image */}
        <div className="absolute inset-0 z-0">
          {/* landing page hero scenic kosovo mountain landscape */}
          <img 
            src="https://pixabay.com/get/g96e4ae2b7b0d201beefb3eee7934a7173a13ba2435f27ad4c654718d5eea93b77633975287c61b1cc849faa2bb22c5404a4fe9dcfd5c9167ff421baf21703e5a_1280.jpg" 
            alt="Kosovo Landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Duke shërbyer diasporën globale
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Ura juaj digjitale <br/>
              <span className="text-gradient-primary">me Kosovën.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              Menaxhoni tokën, trajtoni burokracinë dhe mbështesni familjen nga çdo cep i botës.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group">
                  Shiko Shërbimet
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/5 bg-white/5 backdrop-blur-sm">
                  Regjistrohu Falas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-display font-bold text-white mb-1">2,847</p>
                <p className="text-sm text-white/50">Familje</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white mb-1">12</p>
                <p className="text-sm text-white/50">Komuna</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white mb-1">98%</p>
                <p className="text-sm text-white/50">Kënaqshmëri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Shërbimet Kryesore</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Gjithçka që ju nevojitet për të ruajtur lidhjet dhe pasuritë tuaja në Kosovë.</p>
          </motion.div>

          <motion.div 
            initial="initial" whileInView="animate" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn} className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Toka / Patundshmëri</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Menaxhoni tokën dhe pronat tuaja. Gjeni mundësi për qira apo blerje.
              </p>
              <Link href="/land-leasing" className="text-primary font-medium flex items-center group/link">
                Shiko më shumë <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Familja / Dhurata & Dërgesa</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Dërgoni ushqime dhe dhurata te më të dashurit tuaj me lehtësi.
              </p>
              <Link href="/services/gift-gateway" className="text-purple-400 font-medium flex items-center group/link">
                Shiko më shumë <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Letrat / Administrata</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Gjeneroni dokumente ligjore dhe formulare dygjuhëshe për institucionet e Kosovës.
              </p>
              <Link href="/services/form-builder" className="text-emerald-400 font-medium flex items-center group/link">
                Shiko më shumë <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Pagesa sipas përdorimit, pa tarifa të fshehura</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Besojmë në transparencë të plotë. Shërbimet tona kanë çmime të qarta qysh në fillim.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Globe className="w-5 h-5 text-primary" /> Valuta të ndryshme
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Clock className="w-5 h-5 text-primary" /> Dërgesë e menjëhershme
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
