import styles from "./ProfessionalWork.module.css";
import { Link } from "react-router-dom";
import Fixxpay from "../assets/projects/fixxpay2.png";
import Sakanly from "../assets/projects/sakanly.png";


const ProfessionalWork = () => {


    return(
        <div id="pro-work" className={styles.container} >
            <div className={styles.content}>
                <h2 data-aos="slide-down" data-aos-delay="200" data-aos-duration="600" data-aos-offset="150">Professional Work</h2>

                <div className={styles.projectsContainer}>
                    <Link 
                        className={styles.projectWrapperSakanly} 
                        to="/projects/sakanly"
                        data-aos="flip-left" 
                        data-aos-delay="850"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div id="2" className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Sakanly - Real estate SaaS" src={Sakanly} width={400} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Sakanly</h3>
                                <p></p><p>Real estate SaaS.</p><p></p>
                            </div>
                        </div>
                    </Link>


                    <Link 
                        className={styles.projectWrapperServauth} 
                        to="/projects/fixxpay"
                        data-aos="flip-left" 
                        data-aos-delay="850"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div id="2" className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Fixxpay - E-commerce backend project by Aalachi Mohamed" src={Fixxpay} width={400} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>fixxpay.finance</h3>
                                <p></p><p>E-commerce Engine: A Scalable Django Backend.</p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ProfessionalWork ;