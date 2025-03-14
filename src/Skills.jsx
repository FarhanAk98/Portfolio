import './Skills.css';
import javascript from './logos/javascript.png'
import python from './logos/python.png'
import java from './logos/java.png'
import typescript from './logos/typescript.png'
import react from './logos/react.png'
import html from './logos/html.png'
import css from './logos/css.png'
import nodejs from './logos/nodejs.png'
import express from './logos/express.png'
import graphql from './logos/graphql.png'
import mysql from './logos/mysql.png'
import mongodb from './logos/mongodb.png'
import unity from './logos/unity.png'
import blender from './logos/blender.png'
import restapi from './logos/restapi.png'
import git from './logos/github.png'

function Skills() {
    return (
        <>
        <h1 className='title'>Skills</h1>
        <div id='skills'>
            <div>
                <h2>Languages I speak</h2>
                <ul>
                    <li><img className='logos' src={javascript} alt="javascript logo" /><p>Javascript</p></li>
                    <li><img className='logos' src={python} alt="python logo" /><p>Python</p></li>
                    <li><img className='logos' src={java} alt="java logo" /><p>Java</p></li>
                </ul>
            </div>
            <div>
                <h2>Front End</h2>
                <ul>
                    <li><img className='logos' src={typescript} alt="typescript logo" /><p>TypeScript</p></li>
                    <li><img className='logos' src={react} alt="react logo" /><p>React</p></li>
                    <li><img className='logos' src={html} alt="html logo" /><p>HTML</p></li>
                    <li><img className='logos' src={css} alt="css logo" /><p>CSS</p></li>
                </ul>
            </div>
            <div>
                <h2>Back End</h2>
                <ul>
                    <li><img className='logos' src={nodejs} alt="nodejs logo" /><p>NodeJs</p></li>
                    <li><img className='logos' src={express} alt="express logo" /><p>Express</p></li>
                </ul>
            </div>
            <div>
                <h2>Databases</h2>
                <ul>
                    <li><img className='logos' src={mysql} alt="mysql logo" /><p>MySql</p></li>
                    <li><img className='logos' src={mongodb} alt="mongodb logo" /><p>MongoDB</p></li>
                </ul>
            </div>
            <div>
                <h2>Game Development and Design</h2>
                <ul>
                    <li><img className='logos' src={unity} alt="unity logo" /><p>Unity 3D</p></li>
                    <li><img className='logos' src={blender} alt="blender logo" /><p>Blender</p></li>
                </ul>
            </div>
            <div>
                <h2>Miscellaneous</h2>
                <ul>
                    <li><img className='logos' src={git} alt="git logo" /><p>Git</p></li>
                    <li><img className='logos' src={restapi} alt="restapi logo" /><p>Rest API</p></li>
                    <li><img className='logos' src={graphql} alt="graphql logo" /><p>graphql</p></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Skills;