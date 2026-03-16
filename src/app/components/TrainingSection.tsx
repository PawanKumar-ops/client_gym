import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dumbbell, Flame, Heart } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    name: "Strength",
    description: "Periodized resistance training with progressive overload. Compound movements, precision programming.",
    duration: "60 MIN",
  },
  {
    icon: Flame,
    name: "Metcon",
    description: "High-intensity metabolic conditioning. Functional movements at maximal effort. Engineered intervals.",
    duration: "45 MIN",
  },
  {
    icon: Heart,
    name: "Recovery",
    description: "Active recovery, mobility work, and breathwork. Restore, rebuild, return stronger.",
    duration: "50 MIN",
  },
];

const TrainingSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 lg:py-48 px-6 lg:px-12 bg-foreground text-background opacity-0">
      <div className="container mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/50 mb-6">
          Training
        </p>
        <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-16">
          Three pillars. <span className="text-primary">Zero compromise.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {programs.map((program, i) => (
            <div
              key={program.name}
              className="border border-background/20 p-8 lg:p-12 group hover:border-primary transition-colors duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <program.icon className="w-8 h-8 text-primary mb-8" strokeWidth={1.5} />
              <h3 className="text-display text-2xl mb-4">{program.name}</h3>
              <p className="text-background/60 text-sm leading-relaxed mb-8">{program.description}</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{program.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
