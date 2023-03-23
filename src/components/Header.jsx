import "./Header.css";
import logo from "../assets/react-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="main-container">
        <img src={logo} className="logo"></img>
        <h2 className="title">ReactFacts</h2>
        <h3 className="info">React Course - Project 1</h3>
      </div>
    </header>
  );
}

export default Header;
