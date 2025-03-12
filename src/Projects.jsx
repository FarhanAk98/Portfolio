import Project1 from './assets/Project1.png';
import Project2 from './assets/chatapp.png'
import budget from './assets/budget.png'
import './Projects.css'

function Projects(){
    return(
        <>
        <h1 className='title'>Projects</h1>
        <div id="AllProjects">
            <div className='project'>
                <div>
                    <img src={Project2} alt="ChatApp" />
                </div>
                <div>
                    <h2>Chat App (Full-Stack)</h2>
                    <h4>A full stack chat application created with React, Typescript for the UI and NodeJs, Express and MongoDB for the backend.</h4>
                    <h4>It also makes use of the Pusher tool to handle real time data viewing.</h4>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/FarhanAk98/Chat-App' target='_blank'>
                            {'</> '}GITHUB
                        </a>
                        <a className='liveLink' href='https://chat-app-sigma-ten-21.vercel.app/' target='_blank' >DEMO</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div>
                    <img src={Project1} alt="Connect2KW Screenshot" />
                </div>
                <div>
                    <h2>Connect2KW (Full-Stack, Contribution)</h2>
                    <h4>Connect2KW is a volunteer-run project that manages current events in Waterloo Region.</h4>
                    <h4>My Contribution: Created a location filter that would filter upcoming events based on the postal code the user provides.</h4>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/CivicTechWR/connectedkw' target='_blank'>
                            {'</> '}GITHUB
                        </a>
                        <a className='liveLink' href='https://www.connectedkw.com/' target='_blank' >DEMO</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div>
                    <img src={budget} alt="Budget Tracker" />
                </div>
                <div>
                    <h2>Budget Tracker (Front End)</h2>
                    <h4>A simple budget tracking application in the form of a interactable graph</h4>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/FarhanAk98/Budget-Tracker' target='_blank'>
                            {'</> '}GITHUB
                        </a>
                        <a className='liveLink' href='https://farhanak98.github.io/Budget-Tracker/' target='_blank' >DEMO</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;