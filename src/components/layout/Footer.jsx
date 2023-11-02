import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/shop" style={{ textDecoration: "none" }}>
              Our Shop
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/services" style={{ textDecoration: "none" }}>
              Services
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="contact-info">
          <p>&#169; {new Date().getFullYear()} PillBill Pharmacy</p>
          <p>Pharmacist-in-Charge: Anupam Debnath, RPh</p>
          <p>License No: [Your Pharmacy License Number]</p>
          <p>Address: [Your Pharmacy Address]</p>
          <p>Phone: [Your Pharmacy Phone Number]</p>
          <p>Email: [Your Pharmacy Email]</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
