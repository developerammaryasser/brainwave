import Container from "../elements/Container";
import Button from "../elements/Button";
import { ScrollParallax } from "react-just-parallax";

// Images
import { robot, heroBackground, curve, yourlogo } from "../../assets";
const Hero = () => {
  return (
    // Hero section
    <section className="pt-[80px] relative" id="hero">
      <Container>
        <div className="flex flex-col items-center justify-center gap-24">
          <div className="flex flex-col items-center justify-center gap-8 text-center relative z-3">
            <h1 className="h1">
              Explore the Possibilities <br />
              of AI Chatting with{" "}
              <span className="relative">
                Brainwave <img src={curve} className="absolute left-0" alt="" />
              </span>
            </h1>
            <p className="md:w-[70%] body-1">
              Unleash the power of Ai within Brainwave. Upgrade your
              productivity with Brainwave, the open AI chat app.
            </p>
            <Button
              white={true}
              href="https://www.linkedin.com/in/frontend-ammar-yasser"
              px="px-6"
            >
              Get Started
            </Button>
          </div>
          {/* Hero image */}
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute bottom-0 lg:top-0 z-1 w-full flex flex-col justify-start items-center">
              <img src={heroBackground} alt="Robot" className="object-cover" />
            </div>
          </ScrollParallax>
          <div className="w-full rounded-3xl relative z-2 h-[250px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={robot}
              alt="Robot"
              className="object-cover absolute -top-14 lg:-top-80 w-full"
            />
          </div>
          {/* Logos */}
          <div className=" relative z-2 w-full hidden lg:block">
            <p className="tagline text-n-3 text-center">
              Helping people create beautiful content at
            </p>
            <div className="py-20 flex justify-between">
              <img src={yourlogo} alt="yourlogo" />
              <img src={yourlogo} alt="yourlogo" />
              <img src={yourlogo} alt="yourlogo" />
              <img src={yourlogo} alt="yourlogo" />
              <img src={yourlogo} alt="yourlogo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
