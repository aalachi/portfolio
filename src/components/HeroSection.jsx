import { useState } from 'react';
import styles from "./HeroSection.module.css";
import ParticleSystem from './ParticleSystem';
import TypeWriter from './TypeWriter';


const HeroSection = () => {
    const [showKnowMore, setShowKnowMore] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    const scrollToAbout = () => {
        var elmntToView = document.getElementById("about");
        elmntToView.scrollIntoView({behavior:"smooth"});
    }

    const handleGreetingComplete = () => {
        setShowName(true);
    }

    const handleNameComplete = () => {
        setShowTitle(true);
    }

    const handleTitleComplete = () => {
        setShowKnowMore(true);
    }


    return (
        <div className={styles.landing}>
            <ParticleSystem />
            <div className={styles.landingContainer}>
                <div className={styles.greeting}>
                    <TypeWriter
                        text="Hello! I am"
                        speed={100}
                        startDelay={300}
                        showCursor={false}
                        onComplete={handleGreetingComplete}
                    />
                </div>
                {showName && (
                    
                    <div className={styles.name}>
                        <TypeWriter
                            text="AALACHI MOHAMED"
                            speed={120}
                            startDelay={200}
                            showCursor={false}
                            onComplete={handleNameComplete}
                        />
                    </div>
                )}
                {showTitle && (
                    <div className={styles.title}>
                        <TypeWriter
                            text="a SOFTWARE ENGINEER"
                            speed={80}
                            startDelay={300}
                            showCursor={false}
                            onComplete={handleTitleComplete}
                        />
                    </div>
                )}

                {showKnowMore && (
                    <div className={`${styles.knowmoresection} ${styles.fadeIn}`}>
                        <div className={styles.arrow}>
                            <img src="./arrow.svg" alt="Navigation arrow icon" />
                        </div>
                        <div className={styles.knowmore} onClick={scrollToAbout} >
                            Know more
                        </div>
                    </div>
                )}

                {/* <div className={styles.gears}>
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearOne} src={Gear} />
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearTwo} src={Gear} />
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearThree} src={Gear} />
                </div> */}
            </div>
        </div>
    )
}


export default HeroSection ;