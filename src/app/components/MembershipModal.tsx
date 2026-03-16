import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Check } from "lucide-react";

interface MembershipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const goals = ["Build Strength", "Lose Weight", "Improve Mobility", "Athletic Performance", "General Fitness"];

const MembershipModal = ({ open, onOpenChange }: MembershipModalProps) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", goals: [] as string[] });

  const reset = () => { setStep(1); setForm({ firstName: "", lastName: "", email: "", phone: "", goals: [] }); };

  const toggleGoal = (g: string) => {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(g) ? f.goals.filter((x) => x !== g) : [...f.goals, g],
    }));
  };

  const canProceed = () => {
    if (step === 1) return form.firstName.trim() && form.lastName.trim();
    if (step === 2) return form.email.trim();
    if (step === 3) return form.goals.length > 0;
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) reset(); onOpenChange(o); }}>
      <DialogContent className="max-w-lg p-0 border-none bg-background overflow-hidden">
        {step < 4 && (
          <>
            {/* Progress */}
            <div className="flex">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1 flex-1 ${s <= step ? "bg-primary" : "bg-muted"} transition-colors`} />
              ))}
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Step {step} of 3
              </p>

              {step === 1 && (
                <>
                  <h3 className="text-display text-2xl mb-8">What's your name?</h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                      className="border-foreground/20 focus:border-primary h-12 text-base"
                    />
                    <Input
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                      className="border-foreground/20 focus:border-primary h-12 text-base"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-display text-2xl mb-8">How do we reach you?</h3>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="border-foreground/20 focus:border-primary h-12 text-base"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="border-foreground/20 focus:border-primary h-12 text-base"
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-display text-2xl mb-8">What are your goals?</h3>
                  <div className="flex flex-wrap gap-3">
                    {goals.map((g) => (
                      <button
                        key={g}
                        onClick={() => toggleGoal(g)}
                        className={`px-5 py-3 text-sm font-semibold uppercase tracking-wider border transition-colors ${
                          form.goals.includes(g)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-foreground/20 text-foreground hover:border-primary"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <div className="flex gap-4 mt-10">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="border border-foreground/20 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:border-foreground transition-colors flex-1"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="bg-primary text-primary-foreground px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex-1 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {step === 3 ? "Submit" : "Continue"}
                </button>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="p-12 lg:p-20 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary flex items-center justify-center mb-8">
              <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
            </div>
            <h3 className="text-display text-3xl mb-4">You're in.</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              We'll be in touch within 24 hours. Your transformation starts now, {form.firstName}.
            </p>
            <button
              onClick={() => { reset(); onOpenChange(false); }}
              className="mt-10 border border-foreground/20 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:border-foreground transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MembershipModal;
