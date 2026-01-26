import styles from "./BlogSection.module.css";
import { Link } from "react-router-dom";



const BlogSection = () => {


    return (
        <div id="postss" className={styles.container}>
            <div className={styles.content}>
                <h2>Posts I have written</h2>
                <div className={styles.writes}>
                    <ul>
                        <li>
                            <Link className={styles.textHover}  to="/posts/design-patterns">Design Patterns
                                <span className={styles.date}>Jan 20, 2026</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.textHover}  to="/posts/rest">What is a REST api ?
                                <span className={styles.date}>Jan 14, 2024</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.textHover} to="/posts/debate">Framework vs library vs package vs module : The debate
                                <span className={styles.date}>Jan 3, 2024</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.textHover} to="/posts/auth">Should you implement Authentication yourself ?
                                <span className={styles.date}>Dec 6, 2023</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.textHover}  to="/posts/vim">What's all the hype around Vim ?
                                <span className={styles.date}>Nov 20, 2023</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;