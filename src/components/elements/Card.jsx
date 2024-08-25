import Button from "./Button";
import Menu from "./Menu";

const Card = ({
  buttonWhite = true,
  buttonText = "Get Started",
  text,
  list,
  title,
  titleColor,
  price,
  className = "",
}) => {
  return (
    <div
      className={`border border-n-1/10 p-8 rounded-3xl flex flex-col items-stretch justify-start space-y-6 ${className}`}
    >
      <h3 className={`h3 ${titleColor}`}>{title}</h3>
      <p className="body-2 text-n-3">{text}</p>
      {price && (
        <p className="h4 font-bold">
          $<span className="h1 font-bold">{price}</span>
        </p>
      )}
      <Button white={buttonWhite} href={`/#pricing`}>
        {buttonText}
      </Button>
      <Menu list={list} />
    </div>
  );
};
export default Card;
