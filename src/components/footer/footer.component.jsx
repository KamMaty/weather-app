import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";

import './footer.styles.css'

const Footer = () => {
  return (
    <footer>
      {/* Creator Info */}
        <span>
          Made by Kamil Matyasik © {new Date().getFullYear()}
        </span>
      {/* Social Links */}
      <div className="links-container">
        <a
          href="https://github.com/KamMaty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className='icon'/>
        </a>
        <a
          href="https://www.linkedin.com/in/kamil-matyasik-924786159/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className='icon'/>
        </a>
        <a href="mailto:kammatyasik@gmail.com" >
          <EmailIcon className='icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
