import "./Header.css";

export default function Header() {
  return (
    <div className="header">
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
    </div>
  );
}
