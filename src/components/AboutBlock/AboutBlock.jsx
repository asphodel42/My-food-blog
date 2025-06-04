import "./AboutBlock.css";

function AboutBlock() {
  return (
    <>
      <div className="about-container">
        <h3>About Me, The Food Man</h3>
        <div className="about-img-ct">
          <img
            src="./src/assets/images/chef.jpg"
            alt="Chef photo in black and white"
          />
        </div>
        <div className="about-text-ct">
          <b>I am Who I Am!</b>
          <i>With Passion For Real, Good Food</i>
          <p>
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutBlock;
