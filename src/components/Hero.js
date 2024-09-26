import photo from "../images/photo-grid.jpeg";

function Hero() {
    return (
        <div>
            <section className="Hero">
          <img src={photo}
          alt="photo-1"
          className="photo---grid"
          />
          <h1 className="h1-item">Online Experiences</h1>
          <ul>
            <div className="li-items">
            <li>Join unique interactive activites led by</li>
            <li>One-of-a-kind hosts-all without leaving</li>
            <li>home.</li>
            </div>
          </ul>
          </section>
        </div>
    )
}

export default Hero;
