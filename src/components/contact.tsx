const Contact = () => {
  return (
    <section id="contact" className="s-contact">
      <div className="row contact-top">
        <div className="column lg-12">
          <h1>Contact Me</h1>
          <p>
            I would love to hear from you. Whether you have a question or want
            to discuss a project, feel free to get in touch.
          </p>
        </div>
      </div>

      <div className="row contact-bottom">
        <div className="column lg-6 contact-block">
          <h3>Email</h3>
          <p>
            <a href="mailto:amarcampbell75@gmail.com">
              amarcampbell75@gmail.com
            </a>
          </p>
        </div>
        <div className="column lg-6 contact-block">
          <h3>Phone</h3>
          <p>
            <a href="tel:+YourPhoneNumber">1-876-549-4152</a>
          </p>
        </div>
      </div>

      <div className="row contact-bottom">
        <div className="column lg-6 contact-block">
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/Amarusinggithub" target="_blank">
              GitHub Profile
            </a>
          </p>
        </div>
        <div className="column lg-6 contact-block">
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://linkedin.com/in/amar-campbell-054345233"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};



export default Contact;
