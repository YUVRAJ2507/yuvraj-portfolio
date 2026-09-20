import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const fullName = "Yuvraj Singh Shekhawat";
  const [displayName, setDisplayName] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-badge">
          · Aspiring Software Engineer ·Learner ·BCA Graduate Student
        </span>

        <div className="hero-name-row">
          <h1>
            Hi, I'm{" "}
            <span className="typed-name">
              {displayName}
              {isTyping && <span className="typing-cursor">|</span>}
            </span>
          </h1>

          <img
            src="/Images/Profile_Photo.png"
            alt="Yuvraj Singh Shekhawat"
            className="profile-photo"
          />
        </div>

        <h2 className="hero-subtitle">I Build Practical Software Solutions.</h2>

        <p className="hero-description">
          Passionate about programming, databases, web development, and building real-world applications. I enjoy turning ideas into practical solutions through hands-on learning, problem-solving, and continuous growth.

        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>

          <a
            href="/Resume/Resume_Yuvraj_Singh_Shekhawat.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View Resume
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>

          <a
            href="https://github.com/YUVRAJ2507"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yuvraj2507/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/YUVRAJ2507/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LeetCode
          </a>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>Scroll to explore</span>
          <span>↓</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
