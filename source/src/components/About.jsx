export default function About() {
    return (
      <div className="aboutPage">
        {/* Hero Section */}
        <div className="about-hero-section">
          <h3>Our Mission: Turning Burdens into Dreams</h3>
        </div>
  
        {/* Content Section */}
        <div className="about-content-section">
          <section style={{ textAlign: 'center' }}>
          <h3>
                  Apollo Lands invests in undeveloped land across the United States,
                    helping buyers and sellers find value where others may not.
                    As the saying goes, "One person's trash is another person's treasure."
                   
                </h3>
                <h3>
                    For every landowner feeling stuck or burdened by their property,
                    there’s someone else who sees that same piece of land as the perfect foundation for their dreams—whether it’s
                    building a home, creating a retreat, or making a smart investment.
             
                    At Apollo Lands, we connect those dots,
                    matching sellers ready to move on with buyers ready to turn possibilities into reality.
                    We specialize in turning burdens into dreams.
                </h3>
       
          </section>
  
          <section>
            <h1 style={{ textAlign: 'center' }}>Our Story: Helping People Across the U.S. Connect with Land</h1>
            <p>
              Apollo Lands was founded in 2023 to fill a gap in the raw land real estate market: a simple, transparent way to buy and sell land. 
              Since our founding, we’ve helped people find everything from mountain retreats and waterfront properties to agricultural land and investment parcels.
            </p>
            <p>
              We operate nationwide, with a focus on areas known for natural beauty and outdoor recreation. Whether you’re looking for rural property with 
              minimal building restrictions, land for recreational use, or an off-the-grid escape, Apollo Lands can help you find exactly what you need.
            </p>
          </section>
  

          <section className="meet-the-founder">
              {/* Founder Image */}
          <div className="founder-image">
            {/* Place the founder's image here */}
            <img src="/Military_Portrait.jpg" alt="Founder Roy Badell" />

          </div>
          <div className="founder-text">
            <h2>Meet The Founder:</h2>
            <h3>Roy Badell, Founder & Land Specialist</h3>
            <p>
              Roy’s love for land started with a small investment in a rural property that grew into a passion for helping others unlock 
              the value of land ownership. With over 6 years of experience in land real estate and investments, Roy has built Apollo Lands 
              into a trusted name in the land-selling business.
            </p>
            <p>
              Before founding Apollo Lands, Roy served in the U.S. Army Intelligence Corps and worked as an Account Manager at Education First.
            </p>
          </div>

        
        </section>
        </div>
      </div>
    );
  }
  