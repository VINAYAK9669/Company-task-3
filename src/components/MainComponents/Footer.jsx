import { HiChevronDown } from "react-icons/hi";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="container_1">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="container_2">
          <h3>CONTACT</h3>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="container_3">
          <p>
            <span>United States</span>
            <HiChevronDown />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
