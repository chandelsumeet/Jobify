import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking </span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            officiis, repellat, sit natus ipsum tempora molestiae quas ratione
            animi nulla quis impedit esse consequuntur deserunt inventore saepe
            omnis incidunt dolorum?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
