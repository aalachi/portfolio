import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import MossaqOne from "../../assets/projects/mossaq1.png"
import MossaqTwo from "../../assets/projects/mossaq2.png"
import MossaqThree from "../../assets/projects/mossaq3.png"


const ProjectMossaq = () => {



    return(
        <div>
            <TopBar id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Mossaq</h1>
                <p>
                    <img src={MossaqThree} alt="mossaq" />
                </p>

                <p>
                    Mossaq is a comprehensive social music streaming platform built with <b>Java 25</b> and <b>Spring Boot 4</b>. It bridges the gap between audio streaming and social networking, allowing users to upload tracks, curate personal playlists, and interact with a community of friends through music sharing, likes, and comments.
                </p>

                
                <p>
                    <img src={MossaqTwo} alt="mossaq" />
                </p>

                <p>
                    <img src={MossaqOne} alt="mossaq" />
                </p>
                <p>
                    You can view the entire project on <a style={{textDecoration: "none", color: "green"}} href="github.com/mossaq/mossaq" target="_blank" rel="noopener noreferrer"><b>github/mossaq</b></a>.
                </p>

                
                
                <p></p>
            </div>

            <Footer />
        </div>
    )
}


export default ProjectMossaq ;