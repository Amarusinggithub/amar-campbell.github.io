const Projects = () => {
  return (
    <section id="projects" className="s-styles">
      <div className="row">
        <div className="column lg-12">
          <h1>Projects</h1>
          <div className="project-grid">
            <div className="project-card">
              <h3>Notetify</h3>
              <p>
                <strong>Technologies Used:</strong> HTML, tailwindcss ,
                Typescript,React,Django,docker,aws,redis,cypress,jmeter
              </p>
              <p>
                <strong>Description:</strong>
                Notetify is a sleek and modern full-stack document and
                note-taking application inspired by Google Keep,google docs and
                Evernote, designed to help you easily organize your thoughts,
                tasks, and plans with others. It supports real-time
                collaboration features that allow users to share and work
                together on projects simultaneously. Built with a React frontend
                and a Django backend, it ensures both a responsive user
                experience and robust backend performance.
              </p>
              <a
                href="https://github.com/Amarusinggithub/Notetify"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>E-commerce App</h3>
              <p>
                <strong>Technologies Used:</strong> Flutter, Dart, Firebase,
                Figma
              </p>
              <p>
                <strong>Description:</strong> Built a cross-platform e-commerce
                application enhancing the shopping experience with features like
                product listings, shopping cart, and user authentication.
              </p>
              <a
                href="https://github.com/yourusername/e-commerce-app"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>Budgeting App</h3>
              <p>
                <strong>Technologies Used:</strong> Flutter, Dart, Firebase,
                Figma
              </p>
              <p>
                <strong>Description:</strong> Developed a budgeting application
                that allows users to create budgets and track expenses.
                Implemented Firebase for secure data storage and user
                authentication.
              </p>
              <a
                href="https://github.com/Amarusinggithub/flutter-budgeting-app"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
