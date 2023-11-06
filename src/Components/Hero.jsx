const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Catagoery</button>
        </div>
        <div className="shoping">
          <p>Also avilable on</p>
          <div className="icon">
            <img src="/images/amazon.png" alt="amazon logo"></img>
            <img src="/images/flipkart.png" alt="flipkart logo"></img>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Shoe"></img>
      </div>
    </main>
  );
};
export default HeroSection;
