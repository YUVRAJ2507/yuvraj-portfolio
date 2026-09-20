import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Xavier Institute of Management and Informatics (XIMI) affiliated with Rajasthan Technical University (RTU)",
    period: "2026 – Present",
    result: "NA",
    description:
      "MCA student passionate about software engineering and technology, continuously strengthening my skills through hands-on projects, problem-solving, and real-world application development.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "St. Xavier's College Jaipur affiliated with Rajasthan University ",
    period: "2023 – 2026",
    result: "CGPA: 8.9",
    description:
      "BCA graduate with a strong foundation in programming, web technologies, databases, and software development, with a keen interest in building practical and scalable software solutions.",
  },
  {
    degree: "Senior Secondary - CBSE",
    institution: "DAV Centenary Public School Jaipur",
    period: "2023",
    result: "75% · Science",
    description:
      "Completed Senior Secondary Education under the CBSE curriculum with Science stream.",
  },

   {
    degree: "Secondary - CBSE",
    institution: "Gudha International School Jhunjhunu",
    period: "2021",
    result: "91%",
    description:
      "Completed Secondary education under the CBSE curriculum with First Division.",
  },
];

function Education() {
  return (
    <section id="education" className="education">

      <div className="section-title">
        <span>MY JOURNEY</span>
        <h2>Education</h2>

        <p>
          My academic journey and the foundation behind my interest
          in technology and software development.
        </p>
      </div>

      <div className="education-list">

        {education.map((item, index) => (
          <motion.div
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >

            <div className="education-period">
              {item.period}
            </div>

            <div className="education-content">
              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <span className="education-result">
                {item.result}
              </span>

              <p>{item.description}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Education;