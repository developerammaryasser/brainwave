import { socials } from "../../constants";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container w-full flex justify-between items-center">
        <p className="body-2 text-n-4">&copy; 2024 All rights reserved.</p>
        <div className="flex justify-center items-center gap-2">
          {socials.map((social) => (
            <a href={social.url} key={social.id} className="p-3 transition-all hover:bg-n-6 bg-n-7 rounded-full">
              <img src={social.iconUrl} alt={social.title} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
