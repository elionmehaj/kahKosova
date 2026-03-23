import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { MapPin, Gift, FileText, ClipboardCheck, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Land Leasing (Toka)",
      description: "Securely lease your properties back home. Browse available land or list your own for farming or business.",
      icon: MapPin,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/land-leasing"
    },
    {
      title: "Gift Gateway",
      description: "Support your family in Kosovo by sending essential goods, groceries, and gifts through our trusted vendor network.",
      icon: Gift,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      href: "/services/gift-gateway"
    },
    {
      title: "Bilingual Form Builder",
      description: "Easily generate bilingual legal and administrative forms needed for Kosovo municipalities.",
      icon: FileText,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      href: "/services/form-builder"
    },
    {
      title: "Return to Kosovo Checklist",
      description: "A comprehensive, step-by-step guide for diaspora members planning to return to Kosovo.",
      icon: ClipboardCheck,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      href: "/services/checklist"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg text-white/60">
            Dedicated tools to bridge the gap between the diaspora and Kosovo. Everything you need in one secure platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <Link key={idx} href={s.href}>
              <div className="bg-card border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group cursor-pointer h-full flex flex-col shadow-lg">
                <div className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className={`w-8 h-8 ${s.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-white/60 mb-8 flex-1 leading-relaxed">{s.description}</p>
                <div className={`flex items-center font-medium ${s.color} mt-auto`}>
                  Access Service <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
