import image from './assets/image.jpg';
import './Heading.css';

function Heading() {
    return (
        <>
        <header>
            <div>
                <h1>Farhan Akhtar</h1>
                <h2>Full Stack Developer</h2>
                <h2>Welcome to my personal website
                </h2>
            </div>
            <div>
                <img src={image} alt="pic" />
            </div>
        </header>
        </>
    );
}

export default Heading
