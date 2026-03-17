import { useScrollReveal } from "@/hooks/useScrollReveal";

const PhilosophySection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 lg:pt-48 px-6 lg:px-12 opacity-0 transition-all duration-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Philosophy
            </p>
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              We don't build bodies.
              <br />
              <span className="text-primary">We engineer them.</span>
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Every square foot of City Gym and Spa is designed with intention. Industrial architecture meets precision training methodology. No shortcuts. No compromises. Just results, engineered.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 border-t border-foreground">
          {[
            { value: "4,200", label: "SQ. FT." },
            { value: "18 FT.", label: "CEILINGS" },
            { value: "EST.", label: "2019" },
          ].map((stat) => (
            <div key={stat.label} className="border-b sm:border-b-0 sm:border-r last:border-r-0 border-foreground py-10 px-2">
              <p className="text-display text-3xl lg:text-4xl">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
