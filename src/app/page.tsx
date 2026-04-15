import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Alterations from "@/components/Alterations";
import Repairs from "@/components/Repairs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Shop from "@/components/Shop";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Alterations />
        <Repairs />
        {/* <WhyUs /> */}
        {/* <Testimonials /> */}
        {/* <Process /> */}
        <Shop />
        <Location />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
