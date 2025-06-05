import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>FOOTER</h3>
        <p>
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
          porta lectus vitae, ultricies congue gravida diam non fringilla.
        </p>
        <p>
          Powered by <a href="https://w3schools.com">w3.css</a>
        </p>
      </div>

      <div className="footer-section">
        <h3>BLOG POSTS</h3>
        <div className="blog-post">
          <img
            src="https://www.w3schools.com/w3images/workshop.jpg"
            alt="lorem"
          />
          <div>
            <span>Lorem</span>
            <br />
            <span className="small-text">Sed mattis nunc</span>
          </div>
        </div>
        <hr />
        <div className="blog-post">
          <img
            src="https://www.w3schools.com/w3images/gondol.jpg"
            alt="ipsum"
          />
          <div>
            <span>Ipsum</span>
            <br />
            <span className="small-text">Praes tinci sed</span>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <h3>POPULAR TAGS</h3>
        <div className="tags">
          {[
            "Travel",
            "New York",
            "Dinner",
            "Salmon",
            "France",
            "Drinks",
            "Ideas",
            "Flavors",
            "Cuisine",
            "Chicken",
            "Dressing",
            "Fried",
            "Fish",
            "Duck",
          ].map((tag, index) => (
            <span
              key={index}
              className={`tag ${tag === "Travel" ? "active" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
