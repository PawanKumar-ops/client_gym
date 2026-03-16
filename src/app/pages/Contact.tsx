import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const info = [
    { icon: MapPin, label: "Location", value: "42 Industrial Blvd\nBrooklyn, NY 11201" },
    { icon: Phone, label: "Phone", value: "(555) 012-3456" },
    { icon: Mail, label: "Email", value: "hello@forgefit.com" },
    { icon: Clock, label: "Hours", value: "Mon–Fri 5AM–10PM\nSat 7AM–8PM\nSun 8AM–6PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Let's <span className="text-primary">talk.</span>
          </h1>
        </div>
      </section>

      <section ref={ref} className="pb-32 px-6 lg:px-12 opacity-0">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  className="border-foreground/20 focus:border-primary h-12 text-base"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="border-foreground/20 focus:border-primary h-12 text-base"
                />
              </div>
              <Input
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                required
                className="border-foreground/20 focus:border-primary h-12 text-base"
              />
              <Textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                required
                rows={6}
                className="border-foreground/20 focus:border-primary text-base resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {info.map((item) => (
                <div key={item.label} className="border border-border p-8 hover:border-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">{item.label}</p>
                  <p className="text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="border border-border aspect-[16/9] flex items-center justify-center mt-0">
              <span className="text-muted-foreground text-xs uppercase tracking-widest">Map — Brooklyn, NY</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </div>
  );
};

export default Contact;
