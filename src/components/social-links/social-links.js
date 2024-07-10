import "./social-links.scss";

function SocialLinks() {
  return (
    <div className="social-container">
      <a href="https://www.facebook.com/groups/748009266201827" className="social-links" target="_blank" rel="noopener noreferrer">
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
  );
}

export default SocialLinks;
