const HeroSection = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-secondary px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">
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
