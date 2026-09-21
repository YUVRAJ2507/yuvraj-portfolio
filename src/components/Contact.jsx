import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <span>GET IN TOUCH</span>
        <h2>Let's Connect</h2>

        <p>
          I'm always open to connecting with fellow developers, collaborating
          on meaningful projects, exploring software opportunities, and
          discussing emerging technologies.
        </p>
      </div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side - Contact Details */}
        <div className="contact-details">
          <h3>Get in Touch</h3>

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:yuvrajsingh4984@gmail.com">
              yuvrajsingh4984@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/yuvraj2507/"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/yuvraj2507/
            </a>
          </div>

          <div className="contact-item">
            <span>Contact No.</span>
            <strong>+91 8504975171</strong>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <strong>Jaipur, India</strong>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/mbglolyo"
          method="POST"
        >
          <h3>Send Me a Message</h3>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;