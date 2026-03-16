import { useScrollReveal } from "@/hooks/useScrollReveal";

const SpaceSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="pb-32 lg:pb-48 px-6 lg:px-12 opacity-0">
      <div className="container mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">
          The Space
        </p>
        <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-16">
          Built to <span className="text-primary">perform.</span>
        </h2>

        {/* Broken grid layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large image placeholder */}
          <div className="col-span-12 lg:col-span-7 aspect-[4/3] bg-foreground/5 border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">Concrete & Steel</span>
          </div>
          {/* Yellow accent block */}
          <div className="col-span-6 lg:col-span-5 aspect-square bg-primary flex items-end p-8">
            <p className="text-primary-foreground text-display text-2xl lg:text-3xl">
              Raw.
              <br />
              Industrial.
              <br />
              Intentional.
            </p>
          </div>
          {/* Two smaller blocks */}
          <div className="col-span-6 lg:col-span-5 aspect-[3/4] bg-foreground/5 border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">Natural Light</span>
          </div>
          <div className="col-span-12 lg:col-span-4 aspect-[4/3] bg-foreground/5 border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">Training Floor</span>
          </div>
          <div className="col-span-12 lg:col-span-3 aspect-[3/4] bg-foreground flex items-end p-8">
            <p className="text-background text-xs font-semibold uppercase tracking-[0.3em]">18 ft. ceilings. Polished concrete. Floor-to-ceiling glass.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
