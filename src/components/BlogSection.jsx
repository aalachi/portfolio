import styles from "./BlogSection.module.css";



const BlogSection = () => {


    return (
        <div id="postss" className={styles.container}>
            <div className={styles.content}>
                <h2>Posts I have written</h2>
                <div className={styles.writes}>
                    <ul>
                        <li>
                            <a className={styles.textHover}  href="/posts/design-patterns">Design Patterns
                                <span className={styles.date}>Jan 20, 2026</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.textHover}  href="/posts/rest">What is a REST api ?
                                <span className={styles.date}>Jan 14, 2024</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.textHover} href="/posts/debate">Framework vs library vs package vs module : The debate
                                <span className={styles.date}>Jan 3, 2024</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.textHover} href="/posts/auth">Should you implement Authentication yourself ?
                                <span className={styles.date}>Dec 6, 2023</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.textHover}  href="/posts/vim">What's all the hype around Vim ?
                                <span className={styles.date}>Nov 20, 2023</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;