import Heading from "./Heading";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from './Contact'
import './TopBar.css'
import { Link, Element } from 'react-scroll'

function App() {
    return (
        <>
        <div id="topbar" >
            <h4>Farhan's Portfolio</h4>
            <nav>
                <Link to="skills" smooth={true} duration={500} >Skills</Link>
                <Link to="projects" smooth={true} duration={600} >Projects</Link>
                <Link to="contact" smooth={true} duration={700} >Contact me</Link>
            </nav>
        </div>
        <main>
            <Heading />
            <Element name="skills" >
                <Skills />
            </Element>
            <Element name="projects" >
                <Projects />
            </Element>
            <Element name="contact" >
                <Contact />
            </Element>
        </main>
        </>
    );
}

export default App