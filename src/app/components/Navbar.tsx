import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/schedule", label: "Schedule" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ onMembershipClick }: { onMembershipClick: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link to="/" className="text-display text-xl tracking-tight">
          City Gym and Spa
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors hover:text-foreground ${
                location.pathname === l.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={onMembershipClick}
            className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors ml-2"
          >
            Join Now
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-sm font-semibold uppercase tracking-widest">
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onMembershipClick(); }}
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest w-full"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
