import Navbar from "./components/layouts/Navbar";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowToUse from "./components/sections/HowToUse";
import Footer from "./components/layouts/Footer";
import Pricing from "./components/sections/Pricing";
import Roadmap from "./components/sections/Roadmap";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowToUse />
      <Pricing />
      <Roadmap />
      <Footer />
      <ButtonGradient />
    </>
  );
};
export default Home;
