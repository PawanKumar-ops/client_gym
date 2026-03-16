import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "89",
    period: "/month",
    description: "For those ready to begin.",
    features: [
      "Unlimited group classes",
      "Access during staffed hours",
      "Locker room & showers",
      "FORGE mobile app",
      "Monthly body composition scan",
    ],
    featured: false,
  },
  {
    name: "Performance",
    price: "149",
    period: "/month",
    description: "For those ready to commit.",
    features: [
      "Everything in Essential",
      "24/7 facility access",
      "2 personal training sessions/mo",
      "Recovery Lab access",
      "Quarterly program design",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "249",
    period: "/month",
    description: "For those who demand the best.",
    features: [
      "Everything in Performance",
      "Unlimited personal training",
      "Custom nutrition programming",
      "Weekly Recovery Lab sessions",
      "Private training hours",
      "Competition prep support",
      "Unlimited guest passes",
      "Exclusive member events",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);
  const ref = useScrollReveal();
  const faqRef = useScrollReveal();

  const faqs = [
    { q: "Is there a contract or commitment?", a: "No long-term contracts. All memberships are month-to-month with 30 days notice to cancel." },
    { q: "Can I freeze my membership?", a: "Yes. You can freeze for up to 2 months per year at no additional cost." },
    { q: "Do you offer a trial?", a: "We offer a complimentary 3-day trial for all new members. Come experience FORGE before you commit." },
    { q: "What's included in personal training?", a: "1-on-1 sessions with our certified coaches including program design, technique coaching, and progress tracking." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Pricing</p>
          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Invest in <span className="text-primary">yourself.</span>
          </h1>
        </div>
      </section>

      {/* Plans */}
      <section ref={ref} className="pb-32 px-6 lg:px-12 opacity-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`border p-8 lg:p-12 flex flex-col ${
                  plan.featured
                    ? "border-primary bg-foreground text-background"
                    : "border-border"
                }`}
              >
                {plan.featured && (
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Most Popular</p>
                )}
                <h3 className="text-display text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-display text-5xl">${plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "text-background/60" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary" : "text-primary"}`} strokeWidth={2.5} />
                      <span className={`text-sm ${plan.featured ? "text-background/80" : "text-muted-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setMembershipOpen(true)}
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-foreground/20 text-foreground hover:border-primary"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-muted opacity-0">
        <div className="container mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">FAQ</p>
          <h2 className="text-display text-3xl lg:text-4xl mb-12">Common <span className="text-primary">questions.</span></h2>
          <div>
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-border py-8">
                <h4 className="font-semibold text-sm mb-3">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </div>
  );
};

export default Pricing;
