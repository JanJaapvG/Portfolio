import "./Header.css";
import { SocialIcon } from "react-social-icons";
import { links, socials } from "../../Constants/constants";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div id="title">
          <h1 className="title">JJvG</h1>
        </div>

        <div className="links">
          {links.map(({ name, url }) => (
            <div className="link">
              <a className="navLink" href={url}>
                {name}
              </a>
            </div>
          ))}
        </div>

        <div className="socials">
          {socials.map(({ url, network, bgColor, fgColor }) => (
            <div className="social">
              <SocialIcon
                url={url}
                network={network || ""}
                bgColor={bgColor || ""}
                fgColor={fgColor || ""}
              ></SocialIcon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
