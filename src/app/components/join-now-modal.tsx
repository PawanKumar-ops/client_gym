import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Dumbbell, Flame, Heart, Trophy, Zap, X } from "lucide-react";
import { useIsMobile } from "./ui/use-mobile";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  goal: string;
};

const GOALS = [
  { value: "Build Strength", icon: Dumbbell },
  { value: "Lose Weight", icon: Flame },
  { value: "Improve Mobility", icon: Heart },
  { value: "Athletic Performance", icon: Trophy },
  { value: "General Fitness", icon: Zap },
];

const TOTAL_STEPS = 3;

export function JoinNowModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    goal: "",
  });

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(0);
        setSubmitted(false);
        setData({ firstName: "", lastName: "", phone: "", email: "", goal: "" });
      }, 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  const canProceed = () => {
    if (submitted) return true;
    if (step === 0) return data.firstName.trim() && data.lastName.trim();
    if (step === 1) return data.phone.trim();
    if (step === 2) return data.goal !== "";
    return false;
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
    else setSubmitted(true);
  };
  const back = () => step > 0 && setStep(step - 1);

  const overlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const desktopPanel = {
    hidden: { opacity: 0, scale: 0.94, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 8 },
  };

  const mobilePanel = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" },
  };

  const Header = (
    <div className="flex items-center justify-between px-6 pt-6">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-yellow-400 flex items-center justify-center">
          <Dumbbell className="size-4 text-black" />
        </div>
        <span className="tracking-widest uppercase text-black/70" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
          Membership
        </span>
      </div>
      <button
        onClick={onClose}
        className="size-9 rounded-full hover:bg-black/5 transition-colors flex items-center justify-center"
        aria-label="Close"
      >
        <X className="size-4" />
      </button>
    </div>
  );

  const Progress = !submitted && (
    <div className="px-6 pt-5">
      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full bg-black/10 overflow-hidden">
            <motion.div
              className="h-full bg-yellow-400"
              initial={false}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-black/50" style={{ fontSize: 12 }}>
        <span>Step {step + 1} of {TOTAL_STEPS}</span>
        <span>{["Your name", "Contact", "Your goal"][step]}</span>
      </div>
    </div>
  );

  const Body = (
    <div className="px-6 py-6 min-h-[280px]">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto size-16 rounded-full bg-yellow-400 flex items-center justify-center mb-5"
            >
              <Check className="size-8 text-black" strokeWidth={3} />
            </motion.div>
            <h2 className="mb-2">You're in.</h2>
            <p className="text-black/60 mb-2">We'll be in touch within 24 hours.</p>
            <p className="text-black/80">
              Your transformation starts now,{" "}
              <span className="text-yellow-600">{data.firstName || "Champion"}</span>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h2 className="mb-1">Let's start with you.</h2>
                  <p className="text-black/55">Tell us your name to personalize your journey.</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      autoFocus
                      value={data.firstName}
                      onChange={(e) => setData({ ...data, firstName: e.target.value })}
                      placeholder="Alex"
                      className="mt-1.5 h-11 bg-white border-black/15 focus-visible:ring-yellow-400/40 focus-visible:border-yellow-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={data.lastName}
                      onChange={(e) => setData({ ...data, lastName: e.target.value })}
                      placeholder="Morgan"
                      className="mt-1.5 h-11 bg-white border-black/15 focus-visible:ring-yellow-400/40 focus-visible:border-yellow-400"
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="mb-1">How can we reach you?</h2>
                  <p className="text-black/55">A coach will call to confirm your spot.</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="phone">Phone no.</Label>
                    <Input
                      id="phone"
                      autoFocus
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="mt-1.5 h-11 bg-white border-black/15 focus-visible:ring-yellow-400/40 focus-visible:border-yellow-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-black/40">(optional)</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      placeholder="you@email.com"
                      className="mt-1.5 h-11 bg-white border-black/15 focus-visible:ring-yellow-400/40 focus-visible:border-yellow-400"
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="mb-1">What are your goals?</h2>
                  <p className="text-black/55">Pick what matters most. We'll build around it.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {GOALS.map(({ value, icon: Icon }) => {
                    const selected = data.goal === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setData({ ...data, goal: value })}
                        className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left ${
                          selected
                            ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_0_3px_rgba(250,204,21,0.15)]"
                            : "border-black/10 bg-white hover:border-black/25 hover:bg-black/[0.02]"
                        }`}
                      >
                        <div
                          className={`size-9 rounded-lg flex items-center justify-center transition-colors ${
                            selected ? "bg-yellow-400 text-black" : "bg-black/5 text-black/70"
                          }`}
                        >
                          <Icon className="size-4" />
                        </div>
                        <span className="flex-1">{value}</span>
                        {selected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="size-5 rounded-full bg-yellow-400 flex items-center justify-center"
                          >
                            <Check className="size-3 text-black" strokeWidth={3} />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const Footer = !submitted ? (
    <div className="flex items-center justify-between gap-3 px-6 pb-6 pt-2">
      <Button
        variant="ghost"
        onClick={back}
        disabled={step === 0}
        className="text-black/70 hover:bg-black/5 disabled:opacity-0"
      >
        <ArrowLeft className="size-4 mr-1" /> Back
      </Button>
      <Button
        onClick={next}
        disabled={!canProceed()}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 h-11 rounded-full shadow-[0_8px_24px_-8px_rgba(250,204,21,0.7)] disabled:bg-black/10 disabled:text-black/40 disabled:shadow-none transition-all"
      >
        {step === TOTAL_STEPS - 1 ? "Submit" : "Continue"}
        <ArrowRight className="size-4 ml-1" />
      </Button>
    </div>
  ) : (
    <div className="px-6 pb-6 pt-2">
      <Button
        onClick={onClose}
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black h-11 rounded-full shadow-[0_8px_24px_-8px_rgba(250,204,21,0.7)]"
      >
        Let's go
      </Button>
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            variants={isMobile ? mobilePanel : desktopPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={
              isMobile
                ? "w-full bg-white rounded-t-3xl shadow-2xl overflow-hidden"
                : "w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5"
            }
          >
            {isMobile && (
              <div className="pt-3 pb-1 flex justify-center">
                <div className="w-10 h-1.5 rounded-full bg-black/15" />
              </div>
            )}
            {Header}
            {Progress}
            {Body}
            {Footer}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
