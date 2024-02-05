import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer-inner">
        <h2 className="subtitle footer-title">
          &copy; {year}, Yurii Hnatiuk, wejderd1@gmail.com
        </h2>
        <div className="social-container">
          <a href="#" className="social-links">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-links">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="social-links">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-links">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
