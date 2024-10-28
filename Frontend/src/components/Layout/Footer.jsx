import  { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Abhinav Bhardwaj</div>
      <div>
        <Link to={"https://www.linkedin.com/in/abhinav-bhardwaj-58b00a313/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@abhinavbhardwaj2365"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/abhinav-bhardwaj-58b00a313/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/abhinavbhardwaj6789/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;