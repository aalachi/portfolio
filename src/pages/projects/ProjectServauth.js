import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Servauth from "../../assets/projects/servauth.png";


const ProjectServauth = () => {



    return(
        <div>
            <TopBar id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>ServAuth</h1>
                <p>
                    <img src={Servauth} alt="servauth" />
                </p>

                <p>
                    A high-performance authentication server built with Bun, Hono, Better-Auth, and Drizzle ORM.
                </p>
                <p>
                    Check the home page of the project:{" "}
                    <a
                        href="https://servauth.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        textDecoration: "none",
                        color: "orange",
                        
                        }}
                    >
                        servauth.vercel.app
                    </a>
                    </p>


            </div>

            <Footer />
        </div>
    )
} 

export default ProjectServauth ;