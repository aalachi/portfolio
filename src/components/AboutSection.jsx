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
                        I have always been passionate about building software, always strove to learn more, discover technologies
                        and understand the different paradigms behind each one of them. <strong>The goal of my journey
                        is to understand the secrets behind good software</strong> and its success.
                    </p>
                    <p>
                        As a result of this life long learning process, I am able to <strong>design and write 
                        modular, expandable and clean software</strong>. I always try to <strong>solve
                        problems in a language agnostic-manner</strong>, in order to choose the most suited technology to the
                        problem at hand.
                    </p>
                    <p>
                        <strong>I believe in this being the main purpose of a software engineer !</strong>
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