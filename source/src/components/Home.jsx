
  
export default function Home() {
    return (
      <div className="homePage">
        {/* Hero Section */}
        <div className="hero-section">
          <h3>"The Best Investment On Earth, is Earth!" - Louis Glickman</h3>
        </div>
  
        {/* Content Section */}
        <div className="content-section">
          <section>
            <h2>What Can You Do With Land? Everything.</h2>
            <p>Owning land opens up endless possibilities—whether you're looking to build a home, enjoy outdoor activities, invest for the future, or start a new business.</p>
          </section>
        </div>
  
        {/* Card Section */}
        <div className="card-container">
          <section className="card">
            <h3>Homesite: Build Your Dream</h3>
            <img className="card-image" src="/random farm house.jpg" alt="Homesite" />
            <div className="card-content">
              <p>Whether you’re dreaming of a secluded homestead, a tiny house getaway, or an Airbnb rental, land provides the perfect foundation.</p>
              <ul>
                <li>Your forever home</li>
                <li>An off-grid homestead surrounded by nature</li>
                <li>A rental cabin to generate income</li>
              </ul>
            </div>
          </section>
  
          <section className="card">
            <h3>Recreation: Your Playground</h3>
            <img className="card-image" src="public/womand_dog_tent.jpg" alt="Recreation" />
            <div className="card-content">
              <p>Land isn’t just a place to live; it’s also a place to play.</p>
              <ul>
                <li>Hunting, fishing, or rock-hounding</li>
                <li>Camping under the stars or throwing weekend parties</li>
                <li>Shooting sports, archery, or playing outdoor games</li>
              </ul>
            </div>
          </section>
  
          <section className="card">
            <h3>Investment: Secure Your Future</h3>
            <img className="card-image" src="/rising_hand_stock.jpg" alt="Investment" />
            <div className="card-content">
              <p>Land isn’t just a purchase; it’s an investment. Like any other asset, land can appreciate in value over time.</p>
              <ul>
                <li>Generate income through rentals, farming, or recreational activities</li>
                <li>Build wealth through appreciation over time</li>
              </ul>
            </div>
          </section>
  
 
  
          <section className="card">
            <h3>Commercial: Build Your Business</h3>
            <img className="card-image" src="/commercial_investment_image.jpg" alt="Commercial Development" />
            <div className="card-content">
              <p>The right piece of land can be the starting point for a profitable business venture.</p>
              <ul>
                <li>Rental apartments and mobile home parks</li>
                <li>Storage facilities or campgrounds</li>
                <li>Solar farms, wind turbines, or cell towers</li>
              </ul>
            </div>
          </section>
        </div>
  
        <div className="content-section">
          <section>
            <h2>Want to Learn More?</h2>
            <p>Check out the different services we offer in the services section of the navigation bar. We buy land, we sell land, and shoot drone videography!</p>
          </section>
        </div>
      </div>
    );
  }
  