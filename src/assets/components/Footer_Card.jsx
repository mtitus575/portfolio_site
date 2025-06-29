import github_icon from "../media/github_icon.svg";
import email_icon from "../media/email_icon.png";
import linkedin_icon from "../media/linkedIn_icon.svg";

function Footer_Card() {
  return (
    <footer className="ft-main-ctn">
      <section className="ft-ctn">
        <div className="ft-block">
          <h5>Martin Titus</h5>
          <p>
            Building modern web experiences with a focus on clean code and
            user-centered design.
          </p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>England, United Kingdom</p>
          <p>mjtitus06@gmail.com</p>
        </div>
        <div>
          <h5>Connect</h5>
          <div className="icon-ctn">
            <a href="https://github.com/mtitus575">
              <img className="hover" src={github_icon} alt="github icon" />
            </a>
            <a href="#contact-form">
              <img className="hover" src={email_icon} alt="email icon" />
            </a>
            <a href="#">
              <img className="hover" src={linkedin_icon} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <p> 2025 Martin Titus. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer_Card;
