import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <h1 className={styles.h1}>
        Miriam <span className={styles.nova}>Nova</span>
      </h1>
      <br />
      <div className={styles.p_container}>
        <p className={styles.p}>
          Mi nombre es Miriam Nova y desde pequeña, he estado profundamente
          involucrada en la música, cantando en templos de la comunidad judía y
          en eventos diversos. Me recibí de Licenciada y Profesora de Artes en
          la UBA, además de haber cursado el Profesorado de Guitarra y estudios
          de comedia musical en la Escuela de Hugo Midón y la Escuela de Teatro
          del Globo en Buenos Aires.
        </p>
        <br />
        <p className={styles.p}>
          He participado en varias obras de teatro musicales, como "Esperando al
          Zurdo" en el Teatro Corrientes Azul y "Los Miserables" en el Teatro
          Apolo, y también escribí y actué en el unipersonal musical "Sabor a Mi
          Bemol". Empecé a dar clases de canto y teatro, tanto presenciales como
          en línea, con gran aceptación, incluyendo muestras por Zoom durante la
          pandemia.
        </p>
        <br />
        <p className={styles.p}>
          En 2016, fundé el taller de canto grupal "Oye tu voz", donde organizo
          shows y muestras en diversos escenarios, ofreciendo a los alumnos una
          experiencia única. Desde 2017, dirijo un elenco de teatro, promoviendo
          el aprendizaje y la diversión, con una muestra abierta al público al
          final del año. Estoy profundamente agradecida por la oportunidad de
          vivir mi pasión por la música y el teatro.
        </p>
      </div>
      <br />
      <h1 className={styles.h1}>
      Cantante, Actriz y Docente</h1>
    </div>
  );
};

export default About;
