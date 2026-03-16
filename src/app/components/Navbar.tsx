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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 w-full max-w-[1680px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="text-display text-4xl tracking-tight">
          FORGE
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:text-foreground ${
                location.pathname === l.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={onMembershipClick}
            className="ml-4 bg-primary px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Join Now
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-6 border-t border-border bg-background px-6 py-8 lg:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-sm font-semibold uppercase tracking-widest">
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onMembershipClick();
            }}
            className="w-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
