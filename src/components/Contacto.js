import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <>
      <h1>Contacto</h1>
      <div className="contacto">
        <form
          className="contact"
          action="mailto:francomaidana094@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="apellido" placeholder="Apellido" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="asunto" placeholder="Asunto" required />
          <textarea
            name="motivo"
            placeholder="Motivo de contacto"
            required
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
        <div className="img">
          <img src="/perfil.jpg" alt="Perfil" />
        </div>
        <div className="datos">
          <ul>
            <li>Teléfono: +5492215220686</li>
            <li>
              Correo electrónico:{" "}
              <a href="mailto:francomaidana094@gmail.com">
                francomaidana094@gmail.com
              </a>
            </li>
            <li>
              <strong>Redes Sociales:</strong>
              <ul>
                <li><Link to="https://www.linkedin.com/in/francomaida">LinkedIn</Link></li>
                <li><Link to="https://github.com/franco-maidana">GitHub</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contacto;
