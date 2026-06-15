import './App.css'

function App() {

  return (
    <div>

      <header>
        <h1>My Personal Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I am Abdul Farha, a B.Tech student passionate
          about web development and programming.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div>
          <h3>Simple Calculator</h3>
          <p>
            A calculator built using JavaScript with
            spread operator and modules.
          </p>
        </div>

        <div>
          <h3>Portfolio Website</h3>
          <p>
            A personal React portfolio website.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: 24jr1a1201@gmail.com</p>
      </section>

      <footer>
        <p>© 2026 Abdul Farha</p>
      </footer>

    </div>
  )
}

export default App
