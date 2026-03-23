import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-white">K</span>
              </div>
              <span className="font-display font-bold text-xl text-white">KahKosova</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your digital bridge to Kosovo. We provide software tools to help the diaspora manage land, handle bureaucracy, and stay connected with family.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/land-leasing" className="text-white/60 hover:text-primary transition-colors text-sm">Land Leasing (Toka)</Link></li>
              <li><Link href="/services/gift-gateway" className="text-white/60 hover:text-primary transition-colors text-sm">Gift Gateway</Link></li>
              <li><Link href="/services/form-builder" className="text-white/60 hover:text-primary transition-colors text-sm">Bilingual Forms</Link></li>
              <li><Link href="/services/checklist" className="text-white/60 hover:text-primary transition-colors text-sm">Return Checklist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/news" className="text-white/60 hover:text-primary transition-colors text-sm">News & Updates</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Bulevardi Bill Clinton,<br/>Prishtinë 10000, Kosovo</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+383 44 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@kahkosova.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} KahKosova. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center md:text-left">
            Disclaimer: We provide software tools, not legal representation.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
