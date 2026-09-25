import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "St. Xavier's College Jaipur",
    date: "September 2023",
    file: "/Certificates/Django.jpg",
    description:
      "Completed a Web Development Bootcamp, gaining practical knowledge of HTML, CSS, JavaScript, responsive design, and fundamental web development practices.",
  },
  {
    title: "The Agnirva Space Internship Program",
    issuer: "Agnirva",
    date: "March 2026",
    file: "/Certificates/Internship.jpg",
    description:
      "Completed the Agnirva Space Internship Program and gained exposure to professional learning and project-based activities.",
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
    title: "Time Series Analysis",
    issuer: "IIT Guwahati",
    date: "May 2026",
    file: "/Certificates/Time_Series_IIT.png",
    description:
      "Completed the Agnirva Space Internship Program and gained exposure to professional learning and project-based activities.",
  },
  {
    title: "Internet Crimes and Cyber Security",
    issuer: "NPTEL - IIT MADRAS",
    date: "June 2026",
    file: "/Certificates/Internet_Crimes.jpg",
    description:
      "Completed a certification in Internet Crimes and Cyber Security, gaining foundational knowledge of cyber threats, online crimes, security practices, and strategies for protecting digital systems and information.",
  },
];

function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextCertificate = () => {
    setDirection(1);

    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousCertificate = () => {
    setDirection(-1);

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const selectCertificate = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  /* =========================
     Automatic Slide Change
  ========================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextCertificate();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  /* =========================
     Keyboard Navigation
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextCertificate();
      }

      if (event.key === "ArrowLeft") {
        previousCertificate();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  /* =========================
     Touch / Swipe Support
  ========================= */

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    event.currentTarget.dataset.touchStartX = touch.clientX;
    event.currentTarget.dataset.touchStartY = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    const touchStartX = Number(
      event.currentTarget.dataset.touchStartX
    );

    const touchStartY = Number(
      event.currentTarget.dataset.touchStartY
    );

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const differenceX = touchEndX - touchStartX;
    const differenceY = touchEndY - touchStartY;

    /*
      Only treat the gesture as a swipe when
      horizontal movement is greater than vertical movement.
    */

    if (
      Math.abs(differenceX) > 50 &&
      Math.abs(differenceX) > Math.abs(differenceY)
    ) {
      if (differenceX < 0) {
        nextCertificate();
      } else {
        previousCertificate();
      }
    }
  };

  return (
    <section id="certifications" className="certifications">
      {/* =========================
          Section Heading
      ========================= */}

      <div className="section-title">
        <span>LEARNING & DEVELOPMENT</span>

        <h2>Certifications</h2>

        <p>
          Certifications and programs that have contributed to my
          technical and professional development.
        </p>
      </div>

      {/* =========================
          Certificate Carousel
      ========================= */}

      <div
        className="certificate-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}

        <button
          className="certificate-nav certificate-prev"
          onClick={previousCertificate}
          aria-label="Previous certificate"
        >
          ←
        </button>

        {/* Certificate */}

        <motion.div
          className="certificate-slide"
          key={currentIndex}
          initial={{
            opacity: 0,
            x: direction * 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction * -60,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          <div className="certification-card">
            <img
              src={certifications[currentIndex].file}
              alt={`${certifications[currentIndex].title} certificate`}
              className="certificate-image"
              onClick={() =>
                setSelectedCertificate(
                  certifications[currentIndex]
                )
              }
            />

            <span className="certificate-date">
              {certifications[currentIndex].date}
            </span>

            <h3>{certifications[currentIndex].title}</h3>

            <h4>{certifications[currentIndex].issuer}</h4>

            <p>{certifications[currentIndex].description}</p>
          </div>
        </motion.div>

        {/* Next Button */}

        <button
          className="certificate-nav certificate-next"
          onClick={nextCertificate}
          aria-label="Next certificate"
        >
          →
        </button>
      </div>

      {/* =========================
          Certificate Indicators
      ========================= */}

      <div className="certificate-indicators">
        {certifications.map((certificate, index) => (
          <button
            key={certificate.title}
            className={`certificate-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => selectCertificate(index)}
            aria-label={`View certificate ${index + 1}`}
          />
        ))}
      </div>

      {/* =========================
          Certificate Counter
      ========================= */}

      <div className="certificate-counter">
        {currentIndex + 1} / {certifications.length}
      </div>

      {/* =========================
          Certificate Zoom Modal
      ========================= */}

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