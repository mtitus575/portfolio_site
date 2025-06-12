import menu_burger from '../media/menu_button_icon.png' //This is the menu burger icon.
import github_icon from '../media/github_icon.png';
import email_icon from '../media/email_icon.png';
import linkedin_icon from '../media/linkedIn_icon.png';


function Navigation_Card() {
return (
    <nav className='flex header'>
        <section className='flex logo-bnr' href='#'>
            <img className="site logo flx-chnge" src="../public/port_site_logo_white-min.png" alt="website logo" />
            <h3 className="nav-heading flx-chnge">Developer Portfolio</h3>
        </section>
        <section className='flex nav-bnr'>
            <ul className='flex bg-nav'>
                <a href='#'>
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>About</li>
                </a>
                <a href="#">
                    <li>Projects</li>                    
                </a>
                <a href="#">
                    <li>Technologies</li>                    
                </a>
                <a href="#">
                    <li>Contact</li>                    
                </a>
            </ul>
            <ul className='flex socials bg-nav'>
                <a href="#">
                    <img src={github_icon} alt="github icon" />                   
                </a>
                <a href="#">
                    <img src={linkedin_icon} alt="linkedIn icon" />
                </a>
                <a href="#">
                    <img src={email_icon} alt="email icon" />                    
                </a>
            </ul>
            <a href="#" className='sml-nav'>
                <img src={github_icon} />
            </a>
            <a href="#" className='sml-nav'>
                <img src={email_icon} />
            </a>
            <a href="#" className='sml-nav'>
                <img src={menu_burger} />
            </a>
        </section>
    </nav>
);
};

export default Navigation_Card;