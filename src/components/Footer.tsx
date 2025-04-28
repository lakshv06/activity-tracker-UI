function Footer() {
  return (
    <div id="body-footer">
      Made In India with 💚 by Laksh{" "}
      <span>
        {" "}
        <a
          href="https://github.com/lakshv06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ fontSize: "1.5rem" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lakshya-verma-492a51174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin"
            style={{ fontSize: "1.5rem", marginLeft: "0.625rem" }}
          ></i>
        </a>
      </span>
    </div>
  );
}

export default Footer;
