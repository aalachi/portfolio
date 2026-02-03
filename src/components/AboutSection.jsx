import styles from "./AboutSection.module.css";
import Skills from "./Skills";
import LanBlock from "./LanBlock";
import AboutSubSection from "./shared/AboutSubSection";

const AboutSection = () => {

    return (
        <div id='about' className={styles.about} >
            <img 
                src={"/a3la.jpg"} 
                alt="Aalachi Mohamed - Software Engineer Portfolio" 
                className={styles.myphoto}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
            />

            <AboutSubSection>
                <div data-aos="fade-up" data-aos-delay="400">
                    <h2>Who am I</h2>
                    <p>
                        I can't tell how I developed a passion for solving algorithmic problems, it felt rewarding to solve a problem using logical fragments and see the outcome. This passion led me to pursue a career in software engineering, where I could apply my problem-solving skills to real-world challenges.
                    </p>

                    <p>
                        I like to think of myself as a lifelong learner, always eager to explore new technologies and methodologies. 
                    </p>

                    <p>
                        When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or meditating. These activities help me maintain a balanced perspective and fuel my creativity.
                    </p>
                    
                </div>
            </AboutSubSection> 
            
            <AboutSubSection>
                <div data-aos="fade-up" data-aos-delay="600">
                    <h2>What I believe in</h2>
                    <Skills />
                </div>
            </AboutSubSection>

            <AboutSubSection className={styles.stackcontainer}>
                <div data-aos="fade-up" data-aos-delay="800">
                    <h2>Programming languages I use</h2>
                    <div className={styles.stack}>
                        <div className={styles.lanz}>
                            <div data-aos="zoom-in" data-aos-delay="1000">
                                <LanBlock ext=".c" lan="C" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1100">
                                <LanBlock ext=".sh" lan="Bash" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1200">
                                <LanBlock ext=".py" lan="Python" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1300">
                                <LanBlock ext=".java" lan="Java" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1400">
                                <LanBlock ext=".ts" lan="Typescript" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1500">
                                <LanBlock ext=".sql" lan="PL/pgSQL" />
                            </div>
                        </div>
                    </div>
                </div>
            </AboutSubSection>

        </div>
    )
}

export default AboutSection ;