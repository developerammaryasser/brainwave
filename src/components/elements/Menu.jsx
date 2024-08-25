import { check } from "../../assets";

const Menu = ({ list }) => {
  return (
    <ul className="flex flex-col items-stretch justify-start">
      {list.map((item, key) => (
        <li
          key={key}
          className="flex items-start gap-4 border-t border-n-1/10 py-6"
        >
          <img src={check} alt="Photo generating" />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
