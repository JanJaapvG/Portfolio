import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div id="title">
        <h1 className="title">Portfolio</h1>
      </div>

      <div className="links">
        <a href="/" className="navLink">
          About
        </a>
        <a href="/" className="navLink">
          Projects
        </a>
        <a href="/" className="navLink">
          Skills
        </a>
        <a href="/" className="navLink">
          Education
        </a>
        <a href="/" className="navLink">
          Contact
        </a>
      </div>
    </div>
  );
}
