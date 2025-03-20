import image from './assets/image.jpg';
import download from './logos/download.png'
import resume from './assets/resume.pdf'
import './Heading.css';

function Heading() {
    return (
        <>
        <header>
            <div>
                <h1>Farhan Akhtar</h1>
                <h2>Full Stack Developer</h2>
                <h2>Welcome to my personal website</h2>
                {/* <a href={resume} download>
                    <div>
                        Resume
                        <img className='logos' src={download} alt="download logo" />
                    </div>
                </a> */}
            </div>
            <div>
                <img src={image} alt="pic" />
            </div>
        </header>
        </>
    );
}

export default Heading
