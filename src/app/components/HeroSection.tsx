const HeroSection = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/city gym home img 1.jpg"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.35em] text-white sm:text-sm">
          Premium Fitness Studio
        </p>

        <h1 className="text-display text-5xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] mb-12 text-white">
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

