import styles from './Skills.module.css';
import Pencil from '../assets/icons/pencil.svg';
import Diamond from '../assets/icons/diamond.svg';
import Code from '../assets/icons/statistics.svg';


const Skills = () => {

    return (
        <div className={styles.skills}>
            <div className={styles.skill} data-aos="fade-up" data-aos-delay="700">
                <div className={styles.title}>
                    <h4>Good Design</h4>
                </div>
                <i className="fa fa-pencil-ruler">
                    <img src={Pencil} width={40} alt="Pencil icon representing design" />
                </i>
                <p>The design is the most important phase of any software project. That's why I gathered important skill in
                            that field to be able to make good software.</p>
            </div>
            <div className={styles.skill} data-aos="fade-up" data-aos-delay="800">
                <div className={styles.title}>
                    <h4>Clean Development</h4>
                </div>
                <i className="fa fa-align-left">
                    <img src={Code} color='white' width={40} alt="Code icon representing development" />
                </i>
                <p>The development phase can't be accomplished successfully without writing a code that checks all the requirement of a good one, like the K.I.S.S principle.</p>
            </div>
            <div className={styles.skill} data-aos="fade-up" data-aos-delay="900">
                <div className={styles.title}>
                    <h4>Quality Software</h4>
                </div>
                <i className="fa fa-gem">
                    <img src={Diamond} width={40} alt="Diamond icon representing quality" />
                </i>
                <p>A clean code and good design can't be enough if not coupled with other important qualities like extensibility, modularity or reusability. All of those pieces come together to create quality software.</p>
            </div>
        </div>              
    )
}


export default Skills ;