import { motion } from "framer-motion";

const activities = [
  {
    title: "NCC Cadet",
    organization: "National Cadet Corps",
    description:
      "Participated in the All India Nau Sainik Camp (AINSC) and contributed to volunteering activities, developing discipline, teamwork, leadership, and responsibility.",
  },
  {
    title: "College Tech Fest Coordinator",
    organization: "St. Xavier's College, Jaipur",
    description:
      "Coordinated technical fest activities and contributed to website management and promotional content for the event.",
  },
];

function Activities() {
  return (
    <section id="activities" className="activities">

      <div className="section-title">
        <span>BEYOND ACADEMICS</span>
        <h2>Activities</h2>

        <p>
          Experiences that have helped me develop leadership,
          teamwork, communication, and organizational skills.
        </p>
      </div>

      <div className="activities-grid">

        {activities.map((activity, index) => (
          <motion.div
            className="activity-card"
            key={activity.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >

            <div className="activity-number">
              0{index + 1}
            </div>

            <div className="activity-content">
              <h3>{activity.title}</h3>

              <h4>{activity.organization}</h4>

              <p>{activity.description}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Activities;