import { check, service1, service2, service3 } from "../../assets";
import Section from "../layouts/Section";
import {
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
} from "../../assets";
import Menu from "../elements/Menu";
import { Gradient } from "../../assets/svg/Gradient";
const HowToUse = () => {
  const images = [recording03, recording01, disc02, chromecast, sliders04];
  return (
    <Section
      id="how-to-use"
      h2Text={`Generative AI made for creators.`}
      pText={`Brainwave unlocks the potential of AI-powered applications`}
    >
      <div className="opacity-15 translate-y-4 w-full overflow-hidden">
        <Gradient />
      </div>
      <div className="w-full relative flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:px-8 border border-n-1/10 overflow-hidden rounded-3xl  h-[38rem] lg:h-[42rem]">
        <div className="size-full absolute lg:relative top-0 left-0 z-1">
          <img
            src={service1}
            alt="Smartest AI"
            className="object-cover size-full"
          />
        </div>
        <div className="flex flex-col gap-12 lg:w-[65%] relative z-2  px-12 lg:px-0">
          <div className="space-y-4">
            <h3 className="h3">Smartest AI</h3>
            <p className="body-2 text-n-3">
              Brainwave unlocks the potential of AI-powered applications
            </p>
          </div>
          <Menu
            list={[`Photo generating`, `Photo enhance`, `Seamless Integration`]}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="w-full relative flex flex-col lg:flex-row justify-center lg:justify-between items-center border
         border-n-1/10 overflow-hidden rounded-3xl h-[38rem] lg:h-[48rem] bg-gradient-to-t from-black/40"
        >
          <div className="size-full">
            <img
              src={service2}
              alt="Photo editing"
              className="object-cover size-full"
            />
          </div>
          <div className="space-y-4 absolute z-2  px-12 bottom-12">
            <h3 className="h3">Photo editing</h3>
            <p className="body-2 text-n-3">
              Automatically enhance your photos using our AI app's photo editing
              feature. Try it now!
            </p>
          </div>
        </div>
        <div
          className="w-full relative flex flex-col lg:flex-row justify-center
         lg:justify-between items-center border border-n-1/10 overflow-hidden rounded-3xl h-[38rem] lg:h-[48rem] bg-n-7 px-4 lg:p-8"
        >
          <div className="flex flex-col w-full">
            <div className="space-y-4 py-8">
              <h3 className="h3">Video generation</h3>
              <p className="body-2 text-n-3">
                The world’s most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <div className="flex flex-row justify-center items-center gap-2 lg:gap-8 pt-8">
                {images.map((image, key) => (
                  <div
                    key={key}
                    className="rounded-xl p-[0.10rem] transition-all hover:bg-conic-gradient size-[4rem]"
                  >
                    <div className="size-full bg-n-6 rounded-xl flex justify-center items-center">
                      <img src={image} alt={`img-${key}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-n-8 rounded-2xl h-1/2 overflow-hidden">
              <img
                src={service3}
                alt="Video generation"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default HowToUse;
