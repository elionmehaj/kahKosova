import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

export default function News() {
  const featured = {
    title: "New Digital Services Law Passes in Assembly, Benefiting Diaspora",
    excerpt: "The latest assembly session has ratified the long-awaited digital identity framework, allowing citizens abroad to request documents remotely without returning to local municipalities.",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1541872703874-fa7252ce25f5?w=1200&q=80",
    category: "Policy"
  };

  const articles = [
    {
      id: 1,
      title: "Direct Flights from USA to Prishtina Announced for Summer",
      date: "Oct 10, 2024",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "Travel"
    },
    {
      id: 2,
      title: "Cultural Festival Connects 2nd Generation Diaspora in Berlin",
      date: "Oct 08, 2024",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      category: "Culture"
    },
    {
      id: 3,
      title: "Property Tax Updates: What Landowners Need to Know",
      date: "Oct 05, 2024",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      category: "Real Estate"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">Diaspora News</h1>

        {/* Featured Article */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-white/10">
          <div className="absolute inset-0">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-12 h-[500px] flex flex-col justify-end">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-max">
              {featured.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 max-w-3xl leading-tight group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-white/70 max-w-2xl text-lg mb-6 line-clamp-2">{featured.excerpt}</p>
            <div className="flex items-center text-white/50 text-sm">
              <Calendar className="w-4 h-4 mr-2" /> {featured.date}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="group cursor-pointer">
              <div className="h-56 rounded-2xl overflow-hidden mb-5 border border-white/5">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                {article.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                {article.title}
              </h3>
              <div className="flex items-center text-white/50 text-sm">
                <Calendar className="w-4 h-4 mr-2" /> {article.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
