import "./Header.css";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div id="title">
          <h1 className="title">Portfolio</h1>
        </div>

        <div className="links">
          <div className="link">
            <a href="/" className="navLink">
              About
            </a>
          </div>
          <div className="link">
            <a href="/" className="navLink">
              Projects
            </a>
          </div>
          <div className="link">
            <a href="/" className="navLink">
              Skills
            </a>
          </div>
          <div className="link">
            <a href="/" className="navLink">
              Education
            </a>
          </div>
          <div className="link">
            <a href="/" className="navLink">
              Contact
            </a>
          </div>
        </div>

        <div className="socials">
          <div className="social">
            <SocialIcon
              url="https://www.linkedin.com/in/jan-jaap-van-gool-00a382171/"
              fgColor="white"
            />
          </div>

          <div className="social">
            <SocialIcon
              url="https://github.com/JanJaapvG"
              bgColor="black"
              fgColor="white"
            />
          </div>

          <div className="social">
            <SocialIcon
              url="mailto:jan.jaap.v.g@gmail.com"
              network="email"
              bgColor="orange"
              fgColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
