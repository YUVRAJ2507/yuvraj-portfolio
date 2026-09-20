import { motion } from "framer-motion";

const learningTopics = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Strengthening problem-solving skills by learning core data structures, algorithms, complexity analysis, and coding patterns.",
  },
  {
    title: "Advanced Java",
    description:
      "Deepening my understanding of Java, OOP, collections, exception handling, JDBC, and application architecture.",
  },
  {
    title: "AI ML",
    description:
      "Learning Artificial Intelligence and Machine Learning concepts, data preprocessing, model development, and predictive analysis.",
  },
  {
    title: "Salesforce Administration",
    description:
      "Exploring Salesforce fundamentals, administration concepts, data management, security, and platform configuration.",
  },
  {
    title: "Web Development",
    description:
      "Improving my frontend and backend development skills by building practical web applications.",
  },
  {
    title: "Software Architecture",
    description:
      "Learning how to design maintainable applications using proper architecture, separation of concerns, and design patterns.",
  },
];

function Learning() {
  return (
    <section id="learning" className="learning">

      <div className="section-title">
        <span>CURRENTLY EXPLORING</span>
        <h2>Currently Learning</h2>

        <p>
          Technologies and concepts I'm currently exploring to
          strengthen my software development skills.
        </p>
      </div>

      <div className="learning-grid">

        {learningTopics.map((topic, index) => (
          <motion.div
            className="learning-card"
            key={topic.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >

            <span className="learning-number">
              0{index + 1}
            </span>

            <h3>{topic.title}</h3>

            <p>{topic.description}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Learning;