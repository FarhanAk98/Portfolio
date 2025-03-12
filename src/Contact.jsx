import github from "./logos/github.png"
import instagram from "./logos/instagram.png"
import facebook from "./logos/facebook.png"
import linkedin from "./logos/linkedin.png"
import "./Contact.css"

function Contact(){
    return(
        <div id="contacts">
            <h1 className='title'>Contact me</h1>
            <div>
                <a href="https://github.com/FarhanAk98" target="_blank" >
                    <img src={github} alt="Github logo" />
                    <p>GITHUB</p>
                </a>
                <a href="https://www.linkedin.com/in/mohammed-farhan-parvez-akhtar-b38274185/" target="_blank" >
                    <img src={linkedin} alt="Linkedin logo" />
                    <p>LINKEDIN</p>
                </a>
                <a href="https://www.instagram.com/ak_blender_3d_arts/" target="_blank">
                    <img src={instagram} alt="Instagram logo" />
                    <p>INSTAGRAM</p>
                </a>
                <a href="https://www.facebook.com/farhan.parvez.10" target="_blank">
                    <img src={facebook} alt="Facebook logo" />
                    <p>FACEBOOK</p>
                </a>
            </div>
            <div>
                <p><strong>Email:</strong> farhan97parvez@gmail.com</p>
                <p><strong>Phone:</strong> +122689914548</p>
            </div>
        </div>
    );
}

export default Contact;