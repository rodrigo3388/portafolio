import React from 'react';
import "./About.css";
import ghc from "../../media/ghc.jpg";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Sobre mi</h3>
            <p>Soy técnico en informática personal y profesional. Después realicé cursos en Udemy sobre Diseño Web, Java Script, Node, React, PHP, SQL, Laravel, Symfony.</p>
        </div>
        <div className='about-img'>
        <img src={ghc} alt='about'/> 
        </div>
       
    </div>
  )
}

export default About