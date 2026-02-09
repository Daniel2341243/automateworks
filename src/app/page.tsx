import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import Solutions from "@/components/Solutions";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Branchen from "@/components/Branchen";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemAgitation />
        <Solutions />
        <SocialProof />
        <HowItWorks />
        <Branchen />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollTracker />
    </>
  );
}
