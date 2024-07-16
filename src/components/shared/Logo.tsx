import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home/overview"}>
      <div className="w-full mx-auto h-auto flex-start">
        <img
          src="cryptic-logo.png"
          alt="cryptic logo"
          className="w-[70%]"
        />
      </div>
    </Link>
  );
};

export default Logo;
