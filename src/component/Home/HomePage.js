import videoHomePage from "../../assets/hero.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4"></source>
      </video>
      <div className="homepage-content">
        <div className="homepage-title">Make forms worth filling out</div>
        <div className="homepage-description">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be <span className="fw-bold">refreshingly different</span>
          .
        </div>
        <div>
          <button className="homepage-button">Get started-it's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
