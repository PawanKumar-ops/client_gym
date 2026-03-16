const HeroSection = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="text-center max-w-5xl mx-auto opacity-0 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Premium Fitness Studio
        </p>
        <h1 className="text-display text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] mb-12">
          FORM.
          <br />
          FUNCTION.
          <br />
          <span className="text-primary">FITNESS.</span>
        </h1>
        <button
          onClick={onMembershipClick}
          className="bg-primary text-primary-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
        >
          Become a Member
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
