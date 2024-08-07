import React from 'react';
import Trabajos from './data/Trabajo';
import { Link } from 'react-router-dom';

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      {Trabajos.map(trabajo => {
        return (
          <div key={trabajo.id} className='CardPortafolio'>
            <h2>{trabajo.nombre}</h2>
            <h3>Link: <Link to={trabajo.url}>{trabajo.url}</Link></h3>
            {trabajo.urlBackend && (
            <h3>Link: <Link to={trabajo.urlBackend}>{trabajo.urlBackend}</Link></h3>
            )}
            {trabajo.urlFront && (
            <h3>Link: <Link to={trabajo.urlFront}>{trabajo.urlFront}</Link></h3>
            )}
            <h4>Lenguajes y herramientas utilizadas: {trabajo.tecnologias}</h4>
            <p><strong>Informacion del proyecto:</strong> {trabajo.informacion}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Portafolio;
