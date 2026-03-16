import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SpaceSection from "@/components/SpaceSection";
import TrainingSection from "@/components/TrainingSection";
import TrainersSection from "@/components/TrainersSection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";

const Index = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />
      <HeroSection onMembershipClick={() => setMembershipOpen(true)} />
      <PhilosophySection />
      <SpaceSection />
      <TrainingSection />
      <TrainersSection />
      <CTABand onMembershipClick={() => setMembershipOpen(true)} />
      <Footer />
      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </div>
  );
};

export default Index;
