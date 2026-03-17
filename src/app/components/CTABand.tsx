const CTABand = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  return (
    <section className="bg-primary py-24 lg:py-32 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-10">
          Your next chapter
          <br />
          starts here.
        </h2>
        <button
          onClick={onMembershipClick}
          className="bg-primary-foreground text-primary px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary-foreground/90 transition-colors"
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default CTABand;
