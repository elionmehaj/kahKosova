import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, CheckCircle2, ChevronRight } from "lucide-react";

export default function ReturnChecklist() {
  const steps = [
    {
      title: "Tax & Customs Compliance",
      desc: "Understand what belongings you can bring tax-free as a returning diaspora member."
    },
    {
      title: "Property & Residency Registration",
      desc: "Steps to register your permanent address and update your ID card in your municipality."
    },
    {
      title: "Business Permits",
      desc: "If you're opening a business, learn about ARBK registration and municipal permits."
    },
    {
      title: "Healthcare & Education",
      desc: "Enrolling children in local schools and registering for the public health system."
    }
  ];

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">
            <ClipboardCheck className="w-4 h-4" /> Repatriation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Return to Kosovo</h1>
          <p className="text-lg text-white/60 mb-8">
            Planning to move back? We've compiled the official requirements and administrative steps into one simple checklist tailored to your situation.
          </p>
          <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 text-base">
            Start Personalized Questionnaire <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-white/10 hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="hidden md:flex w-14 h-14 rounded-full bg-card border-4 border-background items-center justify-center shrink-0 z-10 text-white/40 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  <span className="font-display font-bold text-xl">{idx + 1}</span>
                </div>
                <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 flex-1 hover:border-white/20 transition-all shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-primary md:hidden" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
