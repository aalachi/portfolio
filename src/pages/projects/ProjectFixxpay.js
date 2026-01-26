import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Fixxpay from "../../assets/projects/fixxpay.png"


const ProjectFixxpay = () => {



    return(
        <div>
            <TopBar id="pro-work"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>E-commerce Engine</h1>

                <p>
                    <img src={Fixxpay} alt="fixxpay" />
                </p>
                <p>
                    FixxPay is a specialized e-commerce platform built to sell high-end mobile accessories (MagSafe power banks). Unlike standard Shopify templates, this platform utilizes a custom-built Django backend to handle complex multi-region support (English, French, Spanish, German) and a high-conversion checkout flow.
                </p>
                <br></br>
                <h2>Live URL</h2>
                <p><a href="https://fixxpay.finance" target="_blank" style={{color:"black"}} rel="noopener noreferrer">https://fixxpay.finance</a></p>
                <p>Swagger documentation is available at : <a href="https://fixxpay.finance/api/docs/" target="_blank" style={{color:"black"}} rel="noopener noreferrer">https://fixxpay.finance/api/docs/</a></p>
                <h2>Role</h2>
                <p>Full Stack Engineer (Django & Python), I developed the entire platform from scratch, it includes the apps : authentication, users, blog, cart, comparison, contact us, orders, payments (Paypal and Caixa), products, reviews, search, newsletter and wishlist.</p>
                <h2>The Challenge</h2>
                Generic e-commerce platforms often force users to register before buying, which kills conversion rates. The goal was to build a system that supports a frictionless Hybrid Checkout Architecture, allowing secure transactions for both authenticated users and guest visitors without compromising data integrity.
            </div>

            <Footer />
        </div>
    )
}


export default ProjectFixxpay ;