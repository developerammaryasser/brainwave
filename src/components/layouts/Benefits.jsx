import { benefits } from "../../constants";
import { benefitImage2 as benefitImgBg } from "../../assets";
const Benefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full lg:w-10/12 pt-16">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="bg-n-8 relative z-3 overflow-hidden p-8 lg:p-16 group lg:w-[380px] h-[380px]"
        >
          <img
            src={benefit.backgroundUrl}
            alt=""
            className="absolute top-0 left-0 w-full h-full -z-2"
          />
          <div className="absolute top-0 left-0 w-full h-full -z-2 opacity-0 group-hover:opacity-15  transition-all">
            <img
              src={benefitImgBg}
              alt={benefit.title}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between size-full">
            <div className="space-y-3">
              <h5 className="h5">{benefit.title}</h5>
              <p className="body-2 text-n-3">{benefit.text}</p>
            </div>
            <div className="flex justify-between items-center">
              <img src={benefit.iconUrl} alt={benefit.title} />
              <a href="" className="tagline font-bold">
                Explore More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Benefits;
