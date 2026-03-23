import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Menu, Globe, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Land Leasing", path: "/land-leasing" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
            <span className="font-display font-bold text-xl text-white">K</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white">KahKosova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-white" : "text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
            <Globe className="w-4 h-4 mr-2" />
            EN
          </Button>
          
          <div className="w-px h-6 bg-white/10"></div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <Button onClick={logout} variant="ghost" size="icon" className="text-white/70 hover:text-red-400 hover:bg-red-400/10">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/sign-in" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
                Log In
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-2xl py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block py-2 text-base font-medium ${
                  location === link.path ? "text-primary" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            {user ? (
              <>
                <Link href="/dashboard" className="block py-2 text-base font-medium text-white/80">Dashboard</Link>
                <button onClick={logout} className="text-left py-2 text-base font-medium text-red-400">Log Out</button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <Link href="/sign-in">
                  <Button variant="outline" className="w-full justify-center border-white/10 text-white hover:bg-white/5">Log In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-white">Sign Up</Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
