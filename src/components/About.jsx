import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-title">
        <span>ABOUT ME</span>
        <h2>Who I Am</h2>
      </div>

      <div className="about-container">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h3>
            Building skills through
            <span> Real World Projects.</span>
          </h3>

          <p>
            I'm currently pursuing my Master of Computer Applications
            at Xavier Institute of Management and Informatics(XIMI).
          </p>

          <p>
            I enjoy understanding how software works and turning ideas
            into practical applications using programming, databases,
            and web technologies.
          </p>

          <p>
            Rather than only learning theory, I prefer learning by
            building projects and solving real-world problems.
          </p>

        </motion.div>


        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="about-stat">
            <span>Education</span>
            <strong>BCA</strong>
          </div>

          <div className="about-stat">
            <span>College</span>
            <strong>St. Xavier's College</strong>
          </div>

          <div className="about-stat">
            <span>CGPA</span>
            <strong>8.9</strong>
          </div>

          <div className="about-stat">
            <span>Focus</span>
            <strong>Software Development</strong>
          </div>

          <div className="about-stat">
            <span>Location</span>
            <strong>Jaipur, India</strong>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;