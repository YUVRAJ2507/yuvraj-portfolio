import { motion } from "framer-motion";

const projects = [
  {
    title: "Home Appliance Repair System",
    category: "Java OOP Project",
    description:
      "A console-based repair management system developed to demonstrate object-oriented programming concepts such as inheritance, abstraction, polymorphism, interfaces, and collections.",
    technologies: ["Java", "OOP", "Collections", "Interfaces"],
    github:
      "https://github.com/YUVRAJ2507/Home-Appliance-Repair-Management-System",
  },
  {
    title: "AI ERP Management System",
    category: "Software Development",
    description:
      "An AI-powered ERP management system project focused on building practical business management functionality.",
    technologies: ["AI", "ERP", "Software Development"],
    github:
      "https://github.com/YUVRAJ2507/AI-ERP-MANAGEMENT-SYSTEM",
  },
];
function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <span>WHAT I'VE BUILT</span>
        <h2>Projects</h2>

        <p>
          Practical projects I've developed while learning programming,
          databases, and software development.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

          <div className="project-tech">
  {project.technologies.map((tech) => (
    <span key={tech}>
      {tech}
    </span>
  ))}
</div>

{project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View on GitHub →
  </a>
)}

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;