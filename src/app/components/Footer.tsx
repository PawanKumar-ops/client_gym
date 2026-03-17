const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="text-display text-2xl mb-4">City Gym and Spa</p>
            <p className="text-background/50 text-sm leading-relaxed">
              Form. Function. Fitness.<br />Engineered for results.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-background/40">Contact</p>
            <div className="space-y-2 text-sm text-background/70">
              <p>hello@forgefit.com</p>
              <p>(555) 012-3456</p>
              <p>42 Industrial Blvd</p>
              <p>Brooklyn, NY 11201</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-background/40">Hours</p>
            <div className="space-y-2 text-sm text-background/70">
              <p>Mon – Fri: 5:00 AM – 10:00 PM</p>
              <p>Saturday: 7:00 AM – 8:00 PM</p>
              <p>Sunday: 8:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-background/40">Social</p>
            <div className="space-y-2 text-sm text-background/70">
              <p className="hover:text-primary cursor-pointer transition-colors">Instagram</p>
              <p className="hover:text-primary cursor-pointer transition-colors">YouTube</p>
              <p className="hover:text-primary cursor-pointer transition-colors">LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30 uppercase tracking-widest">© 2024 City Gym and Spa. All rights reserved.</p>
          <p className="text-xs text-background/30 uppercase tracking-widest">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
