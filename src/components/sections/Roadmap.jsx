import { grid } from "../../assets";
import { roadmap } from "../../constants";
import Button from "../elements/Button";
import Section from "../layouts/Section";

const Roadmap = () => {
  return (
    <Section h2Text={`What we’re working on`} id={`roadmap`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {roadmap.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-8 rounded-3xl border border-n-1/10 p-16 relative bg-n-8 lg:even:translate-y-[6rem]"
          >
            <div className="absolute top-0 left-0">
              <img src={grid} alt="grid" className="object-cover" />
            </div>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="scale-125 lg:scale-100"
            />
            <div className="space-y-3 mt-24">
              <h4 className="h4">{item.title}</h4>
              <p className="body-2 text-n-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-24">
        <Button href={`#roadmap`}>Our Roadmap</Button>
      </div>
    </Section>
  );
};
export default Roadmap;
