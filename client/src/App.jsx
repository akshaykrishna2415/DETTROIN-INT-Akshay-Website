import "./App.css";

export default function App() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <span className="brand">Pavna School</span>
          <nav>
            <a href="#academics">Academics</a>
            <a href="#facilities">Facilities</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h1>Every student grows<br />like a tree — ring by ring.</h1>
        <p>Pavna School pairs CBSE academic rigour with hands-on AI &amp; Robotics, life-skills learning, and a boarding community.</p>
        <a href="#contact" className="btn">Enquire now</a>
      </section>

      <section id="academics" className="section">
        <h2>Academics</h2>
        <p>CBSE curriculum from Pre-Primary to Sr. Secondary, with streams in PCM, PCB, Commerce, and Arts — built around understanding, not rote memory.</p>
      </section>

      <section id="facilities" className="section alt">
        <h2>Facilities</h2>
        <p>GPS-tracked transport, a day-cum-boarding campus, dedicated AI &amp; Robotics labs, and a full sports complex.</p>
      </section>

      <section id="admissions" className="section">
        <h2>Admissions</h2>
        <p>Admissions for the coming session are open. Register, complete a short assessment, and confirm your seat.</p>
      </section>

      <section id="contact" className="section alt">
        <h2>Contact</h2>
        <p>Agra Highway, Sasni, Aligarh, Uttar Pradesh</p>
        <a href="mailto:info@pavnaschoolaligarh.com" className="btn">Email us</a>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Pavna School, Aligarh. Redesign concept by Akshay Krishna K.
      </footer>
    </div>
  );
}
