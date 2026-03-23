import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Form */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white/60 mb-10">
              Have questions about our services or need help with a document? Our team in Prishtina and the US is here to help.
            </p>

            <div className="flex flex-col gap-6 mb-12 bg-card border border-white/5 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>support@kahkosova.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+383 44 123 456 (Kosovo) <br/> +1 (555) 123-4567 (USA)</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Bulevardi Bill Clinton, Prishtinë 10000</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-white/80">Name</Label>
                  <Input required className="bg-white/5 border-white/10 text-white h-12 rounded-xl" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Email</Label>
                  <Input required type="email" className="bg-white/5 border-white/10 text-white h-12 rounded-xl" placeholder="you@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-white/80">Subject</Label>
                <Input required className="bg-white/5 border-white/10 text-white h-12 rounded-xl" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/80">Message</Label>
                <Textarea required className="bg-white/5 border-white/10 text-white rounded-xl min-h-[120px]" placeholder="Write your message here..." />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white text-base shadow-lg shadow-primary/20">
                {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-white/5 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-white font-medium hover:no-underline py-5 text-left">
                  Are the bilingual forms legally binding?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  Our forms are generated according to the latest templates required by Kosovo municipalities. However, depending on the document type, you may still need to have them notarized or apostilled in your country of residence before they are officially accepted in Kosovo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-white/5 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-white font-medium hover:no-underline py-5 text-left">
                  How does the Gift Gateway delivery work?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  We partner directly with established supermarket chains and local vendors in Kosovo. Once you place an order, the vendor prepares the package and coordinates directly with the recipient via the phone number you provide for pickup or delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-white/5 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-white font-medium hover:no-underline py-5 text-left">
                  Is it safe to list my land for lease here?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  Yes. We verify the identity of all users on the platform. The leasing agreements are peer-to-peer, but we provide the digital infrastructure to help you connect securely and draft initial agreements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-white/5 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-white font-medium hover:no-underline py-5 text-left">
                  Which currencies do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5">
                  You can pay using EUR, USD, CHF, or GBP. Our payment processor automatically converts the funds based on the daily exchange rate, ensuring the local vendor receives the exact Euro amount.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
