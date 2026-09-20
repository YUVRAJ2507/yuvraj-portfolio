function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          YSS<span>.</span>
        </div>

        <p>
          Building skills. Building projects. Building the future.
        </p>

        <div className="footer-line"></div>

        <small>
          © {new Date().getFullYear()} Yuvraj Singh Shekhawat. All rights reserved.
        </small>

      </div>

    </footer>
  );
}

export default Footer;