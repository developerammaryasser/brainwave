import Container from "../elements/Container";
import Benefits from "../layouts/Benefits";
import { collabApps, collabContent, collabText } from "../../constants";
import Section from "../layouts/Section";
import { brainwaveSymbol, check, curve1, curve2 } from "../../assets";
import Button from "../elements/Button";
const Features = () => {
  return (
    <section className="relative z-3" id="features">
      <Section
        h2Text={
          <span>
            Chat Smarter, Not Harder <br /> with Brainwave
          </span>
        }
      >
        <Benefits />
      </Section>
      <Container className={`space-y-8`}>
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-6 lg:gap-0">
          <h2 className="h2 capitalize text-start">
            AI Chat App for
            <br />
            seamless
            <br />
            collaboration
          </h2>
          <p className="body-2 text-n-4 lg:w-1/3 text-start">{collabText}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-16">
          <div className="flex flex-col items-start justify-start gap-6">
            <ul className="flex flex-col justify-start items-start gap-8">
              {collabContent.map((content) => (
                <li key={content.id} className="flex flex-col gap-4">
                  <div className="flex justify-start items-center gap-4">
                    <img src={check} alt={content.title} />
                    <h6>{content.title}</h6>
                  </div>
                  <p className="body-2 text-n-4 lg:w-1/2 text-start hidden lg:block">
                    {content.text}
                  </p>
                </li>
              ))}
            </ul>
            <Button px="!px-6">Try It now</Button>
          </div>
          <div className="w-full flex items-center justify-center py-8">
            <div
              className="lg:mr-44 w-[22rem] flex justify-center items-center aspect-square rounded-full 
          border border-n-6 relative scale-75 md:scale-100"
            >
              <div className="w-[12rem] flex justify-center items-center aspect-square rounded-full border border-n-6">
                <div className="w-[6rem] p-[0.2rem] flex justify-center items-center aspect-square rounded-full bg-conic-gradient">
                  <div className="flex size-full justify-center items-center aspect-square rounded-full bg-n-8">
                    <img src={brainwaveSymbol} alt="" />
                  </div>
                </div>
              </div>
              <ul>
                {collabApps.map((app) => (
                  <li
                    key={app.id}
                    className={`absolute -top-[18%] left-1/2 h-4/6 -ml-[1.8rem] origin-bottom`}
                    style={{ transform: `rotate(${45 * app.id}deg)` }}
                  >
                    <div
                      className={`-top-[2rem] flex p-4 bg-n-7 border border-n-1/15 rounded-xl`}
                      style={{ transform: `rotate(${-45 * app.id}deg)` }}
                    >
                      <img
                        src={app.icon}
                        alt={app.title}
                        width={app.width}
                        height={app.height}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-14 pointer-events-none xl:block">
                <img src={curve1} alt="curve" />
              </div>
              <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-16 pointer-events-none xl:block">
                <img src={curve2} alt="curve" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Features;
