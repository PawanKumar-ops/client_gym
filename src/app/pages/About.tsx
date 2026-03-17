import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Award, Clock, MapPin, Dumbbell } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", description: "Every program is engineered with scientific methodology. No guesswork, no filler — only what moves you forward." },
  { icon: Users, title: "Community", description: "A curated collective of driven individuals. We push each other, hold each other accountable, and celebrate every milestone." },
  { icon: Award, title: "Excellence", description: "We don't settle. From equipment selection to coaching credentials, every detail meets the highest standard." },
];

const timeline = [
  { year: "2019", event: "City Gym and Spa opens its doors in a 2,000 sq. ft. Brooklyn warehouse." },
  { year: "2020", event: "Pivoted to outdoor and virtual training. Zero members lost." },
  { year: "2021", event: "Expanded to 4,200 sq. ft. with custom-built training floor." },
  { year: "2023", event: "Launched Recovery Lab and hired a full-time Doctor of Physical Therapy." },
  { year: "2024", event: "Named Brooklyn's #1 boutique fitness studio by CityFit Magazine." },
];

const About = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);
  const missionRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const numbersRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />

      {/* Hero */}
      <section className="px-6 pt-24 sm:pt-28 lg:px-12 lg:pt-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="pb-0 lg:pb-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">About</p>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Built different. <span className="text-primary">By design.</span>
            </h1>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src="gym.svg" alt="weight-lifter" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="pb-24 lg:pb-32 px-6 lg:px-12 opacity-0">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Mission</p>
            <h2 className="text-display text-3xl lg:text-4xl leading-tight">
              To create the most intentional training environment on earth.
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              City Gym and Spa was born from a simple frustration: gyms are either soulless big-boxes or overcrowded boutiques optimizing for Instagram, not results. We built the alternative — a space where architecture serves function, coaching is world-class, and every detail exists for one reason: to make you better.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground text-background opacity-0">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/40 mb-6">Values</p>
          <h2 className="text-display text-3xl lg:text-4xl mb-16">What we <span className="text-primary">stand for.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {values.map((v) => (
              <div key={v.title} className="border border-background/20 p-8 lg:p-12 hover:border-primary transition-colors">
                <v.icon className="w-8 h-8 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="text-display text-xl mb-4">{v.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={storyRef} className="py-24 lg:py-32 px-6 lg:px-12 opacity-0">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Story</p>
          <h2 className="text-display text-3xl lg:text-4xl mb-16">From warehouse to <span className="text-primary">institution.</span></h2>
          <div className="max-w-2xl">
            {timeline.map((t) => (
              <div key={t.year} className="flex flex-col gap-3 border-t border-border py-8 sm:flex-row sm:gap-8">
                <p className="text-display text-2xl text-primary w-auto shrink-0 sm:w-20">{t.year}</p>
                <p className="text-muted-foreground text-sm leading-relaxed pt-1">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section ref={numbersRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-primary opacity-0">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { icon: Users, value: "340+", label: "Active Members" },
            { icon: Dumbbell, value: "25+", label: "Weekly Classes" },
            { icon: Clock, value: "5", label: "Years Strong" },
            { icon: MapPin, value: "4,200", label: "Sq. Ft." },
          ].map((s) => (
            <div key={s.label} className="p-8 lg:p-12 border border-primary-foreground/10">
              <s.icon className="w-6 h-6 text-primary-foreground/40 mb-4" strokeWidth={1.5} />
              <p className="text-display text-3xl lg:text-4xl text-primary-foreground">{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </div>
  );
};

export default About;
