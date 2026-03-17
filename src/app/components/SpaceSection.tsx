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

        <div className="grid grid-cols-12 gap-4 lg:gap-6">

          {/* Concrete & Steel */}
          <div className="col-span-12 lg:col-span-7 aspect-[4/3] relative overflow-hidden">
            <img
              src="/city gym home img 3.jpg"
              alt="Concrete & Steel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-widest">
                Concrete & Steel
              </span>
            </div>
          </div>

          {/* Yellow block (unchanged) */}
          <div className="col-span-6 h-full lg:col-span-5 aspect-square bg-primary flex items-end p-4 sm:p-6 lg:p-8 overflow-hidden">
            <p
              className="text-primary-foreground text-display leading-[0.95] font-semibold"
              style={{
                fontSize: "clamp(0.9rem, 1.8vw, 2.2rem)",
                maxWidth: "12ch",
              }}
            >
              RAW.
              <br />
              INDUSTRIAL.
              <br />
              INTENTIONAL.
            </p>
          </div>
          {/* Natural Light */}
          <div className="col-span-6 lg:col-span-5 aspect-[3/4] relative overflow-hidden">
            <img
              src="/city gym home img 2.jpg"
              alt="Natural Light"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-widest">
                Natural Light
              </span>
            </div>
          </div>

          {/* Training Floor */}
          <div className="col-span-12 lg:col-span-4 aspect-[4/3] relative overflow-hidden">
            <img
              src="/city gym home img 4.jpg"
              alt="Training Floor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-xs uppercase tracking-widest">
                Training Floor
              </span>
            </div>
          </div>

          {/* Text block */}
          <div className="col-span-12 lg:col-span-3 aspect-[3/4] bg-foreground flex items-end p-8">
            <p className="text-background text-xs font-semibold uppercase tracking-[0.3em]">
              18 ft. ceilings. Polished concrete. Floor-to-ceiling glass.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaceSection;