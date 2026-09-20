import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "St. Xavier's College Jaipur",
    date: "September 2023",
    file: "/Certificates/Time_Series_IIT.png",
    description:
      "Completed a Web Development Bootcamp, gaining practical knowledge of HTML, CSS, JavaScript, responsive design, and fundamental web development practices.",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Forage",
    date: "April 2026",
    file: "/Certificates/Tata_Forage.jpg",
    description:
      "Completed the “Data Visualisation: Empowering Business with Effective Insights” certification, gaining practical knowledge of data visualization techniques, analytical thinking, and presenting data-driven insights to support effective business decision-making.",
  },
  {
    title: "Internet Crimes and Cyber Security",
    issuer: "NPTEL - IIT MADRAS",
    date: "April 2026",
    file: "/Certificates/Internet_Crimes.jpg",
    description:
      "Completed a certification in Internet Crimes and Cyber Security, gaining foundational knowledge of cyber threats, online crimes, security practices, and strategies for protecting digital systems and information.",
  },
  {
    title: "The Agnirva Space Internship Program",
    issuer: "Agnirva",
    date: "AICTE Recognized",
    file: "/Certificates/Internship.jpg",
    description:
      "Completed the Agnirva Space Internship Program and gained exposure to professional learning and project-based activities.",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="certifications">
      <div className="section-title">
        <span>LEARNING & DEVELOPMENT</span>

        <h2>Certifications</h2>

        <p>
          Certifications and programs that have contributed to my
          technical and professional development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate, index) => (
          <motion.div
            className="certification-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <img
              src={certificate.file}
              alt={`${certificate.title} certificate`}
              className="certificate-image"
              onClick={() => setSelectedCertificate(certificate)}
            />

            <span className="certificate-date">
              {certificate.date}
            </span>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p>{certificate.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src={selectedCertificate.file}
              alt={`${selectedCertificate.title} certificate`}
              className="certificate-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;