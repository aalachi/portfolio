import styles from "./ProjectSection.module.css";
import { Link } from "react-router-dom";
import ServAuth from "../assets/projects/servauth2.png";
import Datano from "../assets/projects/datano.png" ;
import Bapz from "../assets/projects/bapzvscode.png";
import Compiler from "../assets/projects/compiler.png";
import Calculator from "../assets/projects/calculator.png";


const ProjectSection = () => {


    return(
        <div id="projectss" className={styles.container} >
            <div className={styles.content}>
                <h2 data-aos="slide-down" data-aos-delay="200" data-aos-duration="600" data-aos-offset="150">Code Playgrounds</h2>

                <div className={styles.projectsContainer}>
                    <Link 
                        className={styles.projectWrapperServauth} 
                        to="/projects/servauth"
                        data-aos="flip-left" 
                        data-aos-delay="850"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div id="2" className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="ServAuth - Lightning fast authentication server by Aalachi Mohamed" src={ServAuth} width={400} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>ServAuth</h3>
                                <p></p><p>Lightning fast authentication server.</p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className={styles.projectWrapperOne} 
                        to="/projects/dorker"
                        data-aos="flip-right" 
                        data-aos-delay="800"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div id="1" className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Google Crawler - Python web scraper project by Aalachi Mohamed" src="./dorker.png"/>
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Google Crawler</h3>
                                <p></p><p>A Python built web scraper that fetch for links.</p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className={styles.projectWrapperTwo} 
                        to="/projects/datano"
                        data-aos="zoom-in" 
                        data-aos-delay="850"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Image Annotation Tool - React Canvas application by Aalachi Mohamed" src={Datano} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Image Annotation</h3>
                                <p></p><p>An image annotation tool built with React using Canvas. </p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className={styles.projectWrapperThree} 
                        to="/projects/bapz"
                        data-aos="slide-up" 
                        data-aos-delay="800"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Full-stack E-commerce Website - Django and React project by Aalachi Mohamed" src={Bapz} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Full stack e-commerce</h3>
                                <p></p><p>I built this e-commerce website out of liking Bape clothing, I used Django in the backend and React in the frontend.</p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className={styles.projectWrapperFour} 
                        to="/projects/compiler"
                        data-aos="fade-left" 
                        data-aos-delay="950"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Programming Language Compiler - C implementation project by Aalachi Mohamed" src={Compiler} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Compiler</h3>
                                <p></p><p>This project involves the development of a compiled programming language in C.</p><p></p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className={styles.projectWrapperSix} 
                        to="/projects/calculator"
                        data-aos="fade-right" 
                        data-aos-delay="1100"
                        data-aos-duration="700"
                        data-aos-offset="150"
                    >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="Java Calculator Application - Desktop calculator by Aalachi Mohamed" src={Calculator} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}>
                                <h3>Calculator</h3>
                                <p></p><p>A Java Calculator app.</p><p></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection ;