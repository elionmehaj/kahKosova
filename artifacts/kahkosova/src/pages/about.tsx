import { MainLayout } from "@/components/layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            KahKosova was founded by members of the diaspora, for the diaspora. We believe that distance shouldn't sever the ties to our homeland, our families, or our heritage.
          </p>
        </div>

        {/* Story Section with image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px]">
              {/* kosovo rural family/culture vibe */}
              <img 
                src="https://images.unsplash.com/photo-1546738981-d13c7fa602a8?w=800&q=80" 
                alt="Kosovo Heritage" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Bridging the Gap</h2>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  Every year, thousands of Kosovars abroad face immense bureaucratic hurdles when trying to manage their property, support their relatives, or simply get necessary paperwork done.
                </p>
                <p>
                  We built this platform to digitize the physical lines and remove the friction. By partnering with local municipalities and vetted vendors, we provide a secure, transparent, and seamless experience.
                </p>
                <p>
                  Whether it's paying property taxes, leasing out agricultural land, or sending a surprise cake for a mother's birthday—we are your digital bridge to Kosovo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-card border-t border-b border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-white/60">Your documents and transactions are encrypted and protected with enterprise-grade security.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trusted Network</h3>
                <p className="text-white/60">We only partner with verified local vendors and work directly with municipal guidelines.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Efficiency</h3>
                <p className="text-white/60">No more waiting in lines. Generate documents and complete tasks in minutes, not days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
