import React, { useState } from "react";
import styles from "./Shows.module.css";

const Shows = () => {
  const [showVideos, setShowVideos] = useState(true);

  return (
    <div className={styles.shows_container}>
      <div className={styles.portada_shows}>
        <h1 className={styles.h1}>Shows & Eventos</h1>
      </div>
      <div className={styles.videos_container}>
        <h1>Te invito a conocer un poco de todo lo que hacemos</h1>
        <br />
        <h2>Hacemos de tu Evento un momento inolvidable.</h2>
        <div className={styles.btn_container}>
          {/* Botones para cambiar entre videos y fotos */}
          <button className={styles.btn} onClick={() => setShowVideos(true)}>
            Videos
          </button>
          <button className={styles.btn} onClick={() => setShowVideos(false)}>
            Fotos
          </button>
        </div>
        {showVideos ? (
          <div className={styles.videos}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DO9B9_ZakMA?si=pFQjn5NVz9nLsnG2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/foLs3rVu5qk?si=Vp4HsJf9ZMajA8HU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jiSibq2o7xA?si=LLn-pPVvJfBVLCCo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DO9B9_ZakMA?si=NQIrIVZh4Bf2j_jj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h4 className={styles.h4}>
              SOY MIRIAM NOVA Y DESDE HACE MÁS DE 30 AÑOS QUE ME DEDICO A CANTAR
              EN CASAMIENTOS, CUMPLEAÑOS, Y TODO TIPO DE FIESTAS.<br></br>{" "}
              <br></br>
              ÁNIMO EVENTOS, ORGANIZO KARAOKES, SHOWS EN DIFERENTES IDIOMAS Y
              ESTILOS MUSICALES. CONOCEME!
            </h4>
          </div>
        ) : (
          <div className={styles.pics}>
            {/* Ejemplo de imágenes, reemplaza con tus fotos */}
            <div className={styles.pics_container}>
              <img className={styles.pic} src="2.jpg" alt="Foto 1" />
              <img src="3.jpg" alt="Foto 2" className={styles.pic} />
              <img src="4.jpg" alt="Foto 2" className={styles.pic} />
              <img src="5.jpg" alt="Foto 2" className={styles.pic} />
              <img src="6.jpg" alt="Foto 2" className={styles.pic} />
              <img src="7.jpg" alt="Foto 2" className={styles.pic} />
              <img src="8.jpg" alt="Foto 2" className={styles.pic} />
              <img src="9.jpg" alt="Foto 2" className={styles.pic} />
              <img src="10.jpg" alt="Foto 2" className={styles.pic} />
              <img src="11.jpg" alt="Foto 2" className={styles.pic} />
              <img src="12.jpg" alt="Foto 2" className={styles.pic} />
              <img src="13.jpg" alt="Foto 2" className={styles.pic} />
              <img src="14.jpg" alt="Foto 2" className={styles.pic} />
              <img src="15.jpg" alt="Foto 2" className={styles.pic} />
            </div>
            <h4 className={styles.h4}>
              SOY MIRIAM NOVA Y DESDE HACE MÁS DE 30 AÑOS QUE ME DEDICO A CANTAR
              EN CASAMIENTOS, CUMPLEAÑOS, Y TODO TIPO DE FIESTAS.<br></br>{" "}
              <br></br>
              ÁNIMO EVENTOS, ORGANIZO KARAOKES, SHOWS EN DIFERENTES IDIOMAS Y
              ESTILOS MUSICALES. CONOCEME!
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
