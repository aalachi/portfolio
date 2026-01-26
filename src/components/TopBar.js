import { useNavigate } from "react-router-dom";
import styles from './TopBar.module.css';
import { useEffect } from "react";



const TopBar = (props) => {

    const Navigate = useNavigate() ;

    const returnToHome = async () => {
        await Navigate('/');
        // Use multiple requestAnimationFrame calls and setTimeout fallback for better reliability
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const elem = document.getElementById(props.id);
                    if (elem) {
                        console.log(`Scrolling to element with id: ${props.id}`);
                        elem.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        });
                    } else {
                        console.log(`Element with id "${props.id}" not found`);
                    }
                }, 100);
            });
        });
    };

    const goToBlog = async () => {
        await Navigate('/');
        // Use multiple requestAnimationFrame calls and setTimeout fallback for better reliability
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const elem = document.getElementById("postss");
                    if (elem){
                        console.log('Scrolling to blog section');
                        elem.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        });
                    } else {
                        console.log('Blog section element not found');
                    }
                }, 100);
            });
        });
    }
      
    useEffect(()=> {
        var rot = document.getElementById("root")
        rot.scrollIntoView();
    },[props.id])

    return(
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div onClick={returnToHome} className={styles.backbutton}>Back</div>
                <div onClick={goToBlog} className={styles.blog}>Aalachi Mohamed's blog</div>
                <div className="fantom-elememt"></div>
            </div>
        </div>
    )
}


export default TopBar ;