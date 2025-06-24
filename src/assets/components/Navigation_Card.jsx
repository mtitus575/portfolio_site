import menu_burger from "../media/menu_button_icon.svg";
import github_icon from "../media/github_icon.svg";
import email_icon from "../media/email_icon.png";
import linkedin_icon from "../media/linkedIn_icon.svg";
import exit_icon from "../media/x.svg";

import { showNav, hideNav } from "./functions/logic/toggleNav.js";

function Navigation_Card() {
  return (
    <nav className="flex header">
      <a className="nav-a" href="#">
        <section className="flex logo-bnr" href="#">
          <img
            className="site logo flx-chnge"
            src="../public/port_site_logo_white-min.png"
            alt="website logo"
          />
          <h3 className="nav-heading flx-chnge">Developer Portfolio</h3>
        </section>
      </a>
      <section className="flex nav-bnr">
        <ul className="flex bg-nav">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#expertise">
            <li>Technologies</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <ul className="flex socials bg-nav">
          <a
            href="https://github.com/mtitus575"
            target="_blank"
            className="hover"
          >
            <img src={github_icon} alt="github icon" />
          </a>
          <a href="#" className="hover">
            <img src={linkedin_icon} alt="linkedIn icon" />
          </a>
          <a href="#contact-form" className="hover">
            <img src={email_icon} alt="email icon" />
          </a>
        </ul>
        <a href="#" className="sml-nav hover">
          <img src={github_icon} />
        </a>
        <a href="#contact-form" className="sml-nav hover">
          <img src={email_icon} />
        </a>
        <a
          href="#"
          className="sml-nav mobile hover"
          id="menu-burger"
          onClick={showNav}
        >
          <img src={menu_burger} />
        </a>
      </section>
      <div className="nav-expand" id="nav-expand">
        <img
          src={exit_icon}
          alt="exit button"
          className="exit"
          id="exit"
          onClick={hideNav}
        />
        <ul className="socials bg-nav expanded-socials">
          <a
            href="https://github.com/mtitus575"
            target="_blank"
            className="hover"
          >
            <img src={github_icon} alt="github icon" />
          </a>
          <a href="#" className="hover">
            <img src={linkedin_icon} alt="linkedIn icon" />
          </a>
          <a href="#contact-form" className="hover">
            <img src={email_icon} alt="email icon" />
          </a>
        </ul>
        <ul className="bg-nav expanded-nav">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#expertise">
            <li>Technologies</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation_Card;
