import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    skills: ["C", "Java", "HTML","CSS", "JavaScript"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL", "JDBC"],
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "Git", "GitHub", "MySQL Workbench"],
  },
  {
    title: "Other",
    skills: ["Canva", "CorelDRAW", "MS Office", "SEO Basics"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <span>MY TOOLKIT</span>
        <h2>Skills</h2>

        <p>
          Technologies and tools I've worked with while building
          academic and personal projects.
        </p>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;