import React from "react";
import styles from "./Seminario.module.css";
import tic from "../assets/tic.png";

const Seminario = () => {
  return (
    <div className={styles.seminario_container}>
      <div className={styles.portada_shows}>
        <h1 className={styles.h1}>Seminario de Interpretación de la canción</h1>
      </div>
      <div className={styles.text_container}>
        <h1>Es un encuentro teórico y práctico de 3 horas de duración,</h1>
        <br />
        <h2>el sábado 12 de agosto de 15 a 18 hs.</h2>
      </div>
      <div className={styles.vid}>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/r_6skgjM2so?si=e2wMiJaqiQ9_GMib"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.text_container}>
        <h1>Presencial en CABA</h1>
        <h2 className={styles.h4}>
          Si te encanta cantar y subirte a un escenario, este seminario es para
          vos. Esta orientado para cantantes, alumnos, profesores y cualquier
          persona que quiera comunicarse a través de la canción. 20 % de
          descuento antes del 7 de agosto 50% de descuento para los alumnos del
          taller de canto "Oye tu voz"
        </h2>
      </div>
      <img className={styles.pic_canto} src="curso-de-canto.jpg" alt="" />
      <h5>
        Una experiencia ideal para quienes quieran mejorar sus cualidades arriba
        del escenario.
      </h5>
      <a
        href="https://wa.me/541160209842"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <button className={styles.btn}>Estoy lista/o, quiero aprender!</button>
      </a>
      <div className={styles.tics}>
        <div className={styles.line_black}></div>
        <h1 className={styles.h11}>
          Que vas a lograr al finalizar el Seminario
        </h1>
        <div className={styles.tic_boxes}>
          <div className={styles.tic_box}>
            <img src={tic} className={styles.tic} alt="" />
            <h2 className={styles.h2}>
              Conseguirás liberar tu voz y tu cuerpo al interpretar un texto o
              canción.
            </h2>
          </div>
          <div className={styles.tic_box}>
            <img src={tic} className={styles.tic} alt="" />
            <h2 className={styles.h2}>
              Conseguirás sentirte más seguro y afianzado al subir a un
              escenario.
            </h2>
          </div>
          <div className={styles.tic_box}>
            <img src={tic} className={styles.tic} alt="" />
            <h2 className={styles.h2}>
              Conseguirás llegar al público que te escucha por medio de la
              emoción.
            </h2>
          </div>
          <div className={styles.tic_box}>
            <img src={tic} className={styles.tic} alt="" />
            <h2 className={styles.h2}>
              Por último podrás sentirte un verdadero artista ya que tendras
              herramientas para lograrlo.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminario;
