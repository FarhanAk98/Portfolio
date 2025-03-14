import Project1 from './assets/Project1.png';
import Project2 from './assets/chatapp.png'
import budget from './assets/budget.png'

import javascript from './logos/javascript.png'
import typescript from './logos/typescript.png'
import react from './logos/react.png'
import html from './logos/html.png'
import css from './logos/css.png'
import express from './logos/express.png'
import graphql from './logos/graphql.png'
import mongodb from './logos/mongodb.png'
import tailwind from './logos/tailwindcss.png'
import directus from './logos/directus.png'
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
                    <h4>A full stack text-messaging application.</h4>
                    <div className='tools'>
                        <img className='logos' src={react} alt="react logo" />
                        <img className='logos' src={typescript} alt="typescript logo" />
                        <img className='logos' src={css} alt="css logo" />
                        <img className='logos' src={express} alt="express logo" />
                        <img className='logos' src={mongodb} alt="mongodb logo" />
                        <img className='logos' src={graphql} alt="graphql logo" />
                    </div>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/FarhanAk98/Chat-App' target='_blank'>
                            <div>
                                {'</> '}GITHUB
                            </div>
                        </a>
                        <a className='liveLink' href='https://chat-app-sigma-ten-21.vercel.app/' target='_blank' ><div>DEMO</div></a>
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
                    <h4>A new feature was added that allows citizens to get in touch with others in the regien with specific experiences and skill-sets to gain professional insight.</h4>
                    <h4>My Contribution: Create a profile creation page.</h4>
                    <div className='tools'>
                        <img className='logos' src={react} alt="react logo" />
                        <img className='logos' src={typescript} alt="typescript logo" />
                        <img className='logos' src={tailwind} alt="tailwind logo" />
                        <img className='logos' src={directus} alt="directus logo" />
                    </div>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/CivicTechWR/connectedkw' target='_blank'>
                            <div>
                                {'</> '}GITHUB
                            </div>
                        </a>
                        <a className='liveLink' href='https://www.connectedkw.com/' target='_blank' ><div>DEMO</div></a>
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
                    <div className='tools'>
                        <img className='logos' src={html} alt="html logo" />
                        <img className='logos' src={javascript} alt="javascript logo" />
                        <img className='logos' src={css} alt="css logo" />
                    </div>
                    <div className='links'>
                        <a className='githubLink' href='https://github.com/FarhanAk98/Budget-Tracker' target='_blank'>
                            <div>
                                {'</> '}GITHUB
                            </div>
                        </a>
                        <a className='liveLink' href='https://farhanak98.github.io/Budget-Tracker/' target='_blank' ><div>DEMO</div></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;