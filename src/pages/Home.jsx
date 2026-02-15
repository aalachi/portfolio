import styles from './Home.module.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';
import { Helmet } from 'react-helmet-async';
import ProfessionalWork from '../components/ProfessionalWork';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Aalachi Mohamed</title>
        <meta name="description" content="Aalachi Mohamed - Software Engineer specializing in full-stack development, modern web technologies, and clean code architecture. Portfolio featuring React, Python, Java, and C projects." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohamed Aalachi",
              "alternateName": "Aalachi Mohamed",
              "jobTitle": "Software Engineer",
              "description": "Software Engineer specializing in full-stack development, modern web technologies, and clean code architecture",
              "url": "https://aalachi.vercel.app/",
              "image": "https://aalachi.vercel.app/a3la.jpg",
              "email": "mad.aalachi@gmail.com",
              "sameAs": [
                "https://www.github.com/aalachi",
                "https://www.linkedin.com/in/mohamed-aalachi-878479252/",
                "https://www.youtube.com/@aalachideployed",
                "https://twitter.com/aalachilogs"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Full Stack Development",
                "React",
                "Python",
                "Java",
                "C",
                "TypeScript",
                "Bash",
                "PL/pgSQL",
                "Web Development",
                "Clean Code",
                "Software Architecture"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Software Engineer"
              }
            }
          `}
        </script>
      </Helmet>
      <main className={styles.main}>
          <div className={styles.container}>
              <HeroSection />
              <AboutSection />
              <ProfessionalWork />
              <ProjectSection />
              <BlogSection />
              <Footer />
          </div>
      </main>
    </>
  );
}

export default Home;
