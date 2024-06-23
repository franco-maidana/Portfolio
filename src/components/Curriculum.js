import React from 'react';

const Curriculum = () => {
  return (
    <div>
      <h1>Curriculum</h1>
      <section>
        <h2>Educacion</h2>
        <ul>
          <li>Desarrollo Web - CoderHouse - Febrero 2023 / Abril 2023</li>
          <li>JavaScript - CoderHouse - Mayo 2023 / Julio 2023</li>
          <li>React js - CoderHouse - Julio 2023 / Septiembre 2023</li>
          <li>Programacion Backend - CoderHouse - Nobiembre 2023 / Mayo 2024</li>
          <li>Master En React  - Udemy - Junio 2024 - Actualidad</li>
        </ul>
      </section>
      <section>
        <h2>Habilidades</h2>
        <div className='Habilidades'>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <ul>
          <li>Node.js / Express</li>
          <li>Git</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
        </div>
      </section>
    </div>
  );
}

export default Curriculum;
