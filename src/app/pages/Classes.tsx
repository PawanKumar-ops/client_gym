import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dumbbell, Flame, Heart, Zap, Mountain, Users } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    name: "Barbell Foundations",
    type: "Strength",
    duration: "60 min",
    level: "All Levels",
    description: "Master the fundamental barbell movements — squat, bench, deadlift, overhead press. Periodized programming with progressive overload for consistent strength gains.",
    schedule: "Mon / Wed / Fri — 6:00 AM & 12:00 PM",
  },
  {
    icon: Flame,
    name: "FORGE Metcon",
    type: "Metcon",
    duration: "45 min",
    level: "Intermediate+",
    description: "High-intensity metabolic conditioning combining functional movements, kettlebells, and bodyweight work. Engineered intervals for maximum caloric expenditure and cardiovascular adaptation.",
    schedule: "Mon / Thu — 5:30 PM",
  },
  {
    icon: Heart,
    name: "Restore",
    type: "Recovery",
    duration: "50 min",
    level: "All Levels",
    description: "Active recovery session combining mobility work, foam rolling, breathwork, and gentle movement. Essential for longevity, injury prevention, and performance optimization.",
    schedule: "Mon / Wed — 7:00 PM",
  },
  {
    icon: Zap,
    name: "Olympic Lifting",
    type: "Strength",
    duration: "60 min",
    level: "Intermediate+",
    description: "Clean & jerk, snatch, and their variations. Technical coaching with video analysis. Small groups ensure personalized attention on every rep.",
    schedule: "Tue / Fri — 6:00 AM & 9:00 AM",
  },
  {
    icon: Mountain,
    name: "Morning Burn",
    type: "Metcon",
    duration: "45 min",
    level: "All Levels",
    description: "Start your day with purpose. A high-energy conditioning session designed to elevate your heart rate, torch calories, and set the tone for your day.",
    schedule: "Wed / Fri / Sat — 6:00 AM & 8:00 AM",
  },
  {
    icon: Users,
    name: "Hypertrophy Lab",
    type: "Strength",
    duration: "60 min",
    level: "Intermediate+",
    description: "Muscle-building focused training with tempo work, supersets, and isolation accessories. Structured periodization for maximum hypertrophy.",
    schedule: "Tue / Thu — 6:00 PM",
  },
];

const typeColor = (type: string) => {
  if (type === "Strength") return "bg-foreground text-background";
  if (type === "Metcon") return "bg-primary text-primary-foreground";
  return "border border-foreground/20 text-foreground";
};

const Classes = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const ref = useScrollReveal();

  const filtered = filter === "All" ? classes : classes.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Classes</p>
          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Engineered <span className="text-primary">sessions.</span>
          </h1>
        </div>
      </section>

      <section ref={ref} className="pb-32 px-6 lg:px-12 opacity-0">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex gap-3 mb-12">
            {["All", "Strength", "Metcon", "Recovery"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border ${
                  filter === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-foreground/20 text-foreground hover:border-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Class cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {filtered.map((cls) => (
              <div key={cls.name} className="border border-border p-8 lg:p-10 group hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <cls.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${typeColor(cls.type)}`}>
                    {cls.type}
                  </span>
                </div>
                <h3 className="text-display text-2xl mb-3">{cls.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cls.description}</p>
                <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest">
                  <span className="text-muted-foreground"><span className="text-foreground font-bold">{cls.duration}</span></span>
                  <span className="text-muted-foreground"><span className="text-foreground font-bold">{cls.level}</span></span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">{cls.schedule}</p>
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

export default Classes;
