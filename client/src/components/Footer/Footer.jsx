/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./footer.css";
import logo from "../../assets/logoblanc.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>BougeTonQ.com </p>
        <p>&copy; 2024</p>
        <p>
          Application créée par les dev: Mégane, Ann'Do, Lubin, Bertrand en
          partenariat avec les data: Alexandre et Mykhailo
        </p>
        <img src={logo} alt="Logo" className="logo" onClick={scrollToTop} />
      </div>
    </footer>
  );
}

export default Footer;
