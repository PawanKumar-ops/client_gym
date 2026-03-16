const HeroSection = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-secondary px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">
          Premium Fitness Studio
        </p>

        <h1 className="text-display mb-14 text-6xl leading-[0.92] sm:text-7xl lg:text-[9rem]">
          FORM.
          <br />
          FUNCTION.
          <br />
          <span className="text-primary">FITNESS.</span>
        </h1>

        <button
          onClick={onMembershipClick}
          className="bg-primary px-14 py-5 text-base font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Become a Member
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
