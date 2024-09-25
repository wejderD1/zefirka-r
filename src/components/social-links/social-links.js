import "./social-links.scss";

function SocialLinks() {
  const linksName = [
    {
      name: "facebook",
      url: "https://www.facebook.com/groups/748009266201827/",
    },
    {
      name: "instagram",
      url: "https://www.facebook.com/groups/748009266201827/",
    },
    {
      name: "tiktok",
      url: "https://www.facebook.com/groups/748009266201827/",
    },
  ];

  return (
    <div className="social-container">
      {linksName.map((item) => {
        return (
          <a
            key={item.name}
            href={item.url}
            className="social-links"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <i className={`fab fa-${item.name}`}></i>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
