import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
      <footer>
      <div class="direccion">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h4 class="titulo">Contacto</h4>
              <p class="calle">Mar del plata<br /></p>
              <p class="telefono">(+54 9)223 556-5105</p>
              <p class="correo">rodrigoflorastro318@gmail.com</p>
            </div>
            <div class="col-md-4 logo">
              <h2>Rodrigo Flores</h2>
            </div>
          </div>
        </div>
      </div>
  
      <div class="social">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <a class="linkedin" href="https://www.linkedin.com/in/rodrigo-flores-a77975210" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
              <a class="github" href="https://github.com/rodrigo3388" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
              <a class="twitter" href="https://twitter.com/Rodrigo11200879" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  };

export default Footer