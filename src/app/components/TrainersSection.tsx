import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User } from "lucide-react";

const trainers = [
  { name: "ALEX KOVAC", specialty: "Strength & Powerlifting", credentials: "CSCS, USAW-L2" },
  { name: "MAYA CHEN", specialty: "Metabolic Conditioning", credentials: "CF-L3, NASM-CPT" },
  { name: "JAMES OKAFOR", specialty: "Recovery & Mobility", credentials: "DPT, FMS-L2" },
  { name: "ELENA VOSS", specialty: "Olympic Lifting", credentials: "USAW-L3, MS Kinesiology" },
];

const TrainersSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 lg:py-48 px-6 lg:px-12 opacity-0">
      <div className="container mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Coaches
        </p>
        <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-16">
          Led by the <span className="text-primary">best.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="border border-border rounded-2xl p-8 group hover:border-primary transition-colors duration-300">
              <div className="w-full aspect-[3/4] bg-muted flex items-center justify-center mb-8">
                <User className="w-16 h-16 text-muted-foreground/40" strokeWidth={1} />
              </div>
              <h3 className="text-display text-lg mb-2">{trainer.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{trainer.specialty}</p>
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">{trainer.credentials}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
