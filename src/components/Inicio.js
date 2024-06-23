import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="home">
      <h1>Franco Maidana</h1>
      <p>Desarrollador Web Full Stack</p>

      <p className="parrafoInicio">
        ¡Hola! Soy Franco Maidana, un entusiasta del desarrollo web en constante
        aprendizaje. Aunque recién comienzo mi carrera en la programación, ya he
        realizado varios proyectos personales que me han permitido adquirir
        habilidades en HTML, CSS, JavaScript, React, Node.js y Express. Estoy
        emocionado por continuar aprendiendo y dar el 100% para crecer en este
        campo.
      </p>

      <p className="linkContacto"><Link to='/contacto'>Para Contactarse Oprima Aqui</Link></p>
    </div>
  );
};

export default Inicio;
