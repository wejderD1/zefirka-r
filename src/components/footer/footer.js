import SocialLinks from "../social-links/social-links";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">
          <h2 className="subtitle footer-title">
            &copy; {year}, Yurii Hnatiuk, wejderd1@gmail.com
          </h2>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
