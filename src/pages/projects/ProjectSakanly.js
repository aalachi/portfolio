import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Fixxpay from "../../assets/projects/sakanly.png"


const ProjectSakanly = () => {



    return(
        <div>
            <TopBar id="pro-work"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Sakanly - Real estate SaaS</h1>

                <p>
                    <img src={Fixxpay} alt="fixxpay" />
                </p>
                <p>
                    A real-estate platform designed to simplify property discovery and connect buyers and tenants with property owners and agencies across Morocco.
                </p>
                <br></br>
                <h2>Live URL</h2>
                <p>For SEO optimization the url to Sakanly cannot be disclosed. You are one request away from accessing it via Google.</p>
                
                <h2>Role</h2>
                
                <p>Co-founder & Backend Developer </p>
                
                <h2>Status</h2>    <p> In production / ongoing </p>
                <h2>Tech Stack</h2>
<p>Python · Django · PostgreSQL · Docker · REST API</p>

                    </div>

            <Footer />
        </div>
    )
}


export default ProjectSakanly ;