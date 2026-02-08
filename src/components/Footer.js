import styles from './Footer.module.css';
import Github from '../assets/img/github.svg';
import Linkedin from '../assets/img/linkedin.svg';
import Twitter from '../assets/img/x.svg';
import Youtube from '../assets/img/youtube.svg';
import Substack from '../assets/img/substack.jpg';


const Footer = () => {

    return(
        <div id="footer" style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'10vh' }} >
                <div className={styles.contact}><p>Contact me by <a href="mailto:mad.aalachi@gmail.com">mail</a>
                    <span className={styles.social}><a target="_blank" rel="noopener noreferrer" href="http://www.github.com/aalachi"><img src={Github} width={20} alt="Github" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-aalachi-878479252/"><img src={Linkedin} width={20} alt="LinkedIn" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@aalachideployed"><img src={Youtube} width={20} alt="YouTube" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/aalachilogs"><img src={Twitter} width={19} alt="X (Twitter)" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://substack.com/@aalawrites"><img src={Substack} width={21} alt="Substack" /></a></span>
                    <span className={styles.copyright}>© 2023 - 2026</span></p></div>
                </div>

    )
}


export default Footer ;