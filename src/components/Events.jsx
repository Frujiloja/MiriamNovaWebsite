import React from "react";
import styles from "./Events.module.css";

const Events = () => {
  return (
    <div className={styles.events_container}>
      <div className={styles.text_container}>
        <div>
          <h2 className={styles.h2}>Miriam Nova</h2>
          <h1 className={styles.h1}>AGENDA DE EVENTOS</h1>
        </div>
        <div className={styles.container_year}>
          <div>
            <hr
              style={{
                height: "100%",
                marginTop: "12px",
                marginRight: "30px",
                border: "1px solid white",
              }}
            />
          </div>
          <div>
            <h1 className={styles.h3}>20</h1>
            <h1 className={styles.h3}>24</h1>
          </div>
        </div>
      </div>
      <div className={styles.events}>
        <div className={styles.line1}></div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="taller-de-canto-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
              🎤 CLASES PRESENCIALES DE CANTO EN CABA 🎤 🎶
            </h2>
            <h4>
              🎤 Estas list@ para divertirte y para desarrollar tus talentos?
            </h4>
            <h4>👨‍🎓 Las clases de canto presenciales son 🚩 en Núñez- CABA.</h4>
            <h4>🎙 2 Muestra anuales.</h4>
            <h4>⏰ Martes, Miércoles y Jueves</h4>
            <h4>☎ 11 6020 9842</h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="clases-de-teatro-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
              🎭 CLASES PRESENCIALES DE TEATRO EN CABA 🎭
            </h2>
            <h4>
              🎤 Estas list@ para divertirte y para desarrollar tus talentos?
            </h4>
            <h4>
              👨‍🎓 Las clases de teatro presenciales son 🚩 en Virrey Olaguer y
              Feliú 3117{" "}
              <a
                href="https://www.instagram.com/alimmerestobar/?hl=es"
                className={styles.link}
              >
                Multiespacio Alimme.
              </a>
            </h4>
            <h4>🎙 1 Muestra anual.</h4>
            <h4>⏰ Lunes 20 hs Grupos reducidos"</h4>
            <h4>☎ 11 6020 9842</h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="taller-junio-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
            🕺  SEMINARIO De Canto "La teatralidad aplicada al cantante"
            </h2>
            <h4>
            🎭 Profesora Graciela Nicola.
            </h4>
            <h4>
            👨‍🎓 El objetivo principal es alinear la Voz con la Máscara, usando herramientas que permitan crear el Personaje ideal para cada canción, sin recurrir a la "memoria emotiva" personal del artista. Se aprenderán técnicas que aprovechen la psicología del Personaje, no la del "yo cantante". Además, se trabajará en identificar el espacio escénico que potencie la presencia del artista. En 🚩 CABA.
            </h4>
            <h4>🎙 Sábado 8 de Junio de 16 a 18 hs.</h4>
            <h4>⏰ Consulta los días y horarios de clases Grupos reducidos.</h4>
            <h4>☎  11 6020 9842</h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="La-teatralidad-aplicada-al-cantante-02-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
            🕺  SEMINARIO De Teatro "Interpretación de la canción"
            </h2>
            <h4>
            🎭 Profesora Graciela Nicola.
            </h4>
            <h4>
            👨‍🎓 Objetivos de las clases de interpretación de la canción y Contenidos básicos de las clases de interpretación de la canción.:
            </h4>
            <h4>
            1. Creatividad corporal: segmentos y motores corporales, ejercicios y juegos que diferencien y disocien cada parte del cuerpo.
            </h4>
            <h4>
            2. Pasar por la conciencia corporal, la sonoridad, registrarla.
            </h4>
            <h4>
            3. Creatividad vocal: gama de sonidos y ruidos cotidianos, invenciones de sonidos y ruidos vocales.
            </h4>
            <h4>
            4. Creatividad musical: improvisación vocal, reproducción y creación de ritmos
            </h4>
            <h4>🚩 En Núñez - CABA. 🎙 Cerrando Cupos para los Viernes de Junio de 19hs a 21hs. ☎  11 6020 9842</h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="miriam-nova-evento-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
            🎙️ Muestra del Taller de Canto "Oye Tu Voz"
            </h2>
            <h4>
            🕺  Vamos a pasarla muy bien
            </h4>
            <h4>
            🚩 AUDITORIO AMAP Venezuela 1283 CABA
            </h4>
            <h4>
            🎙 Sábado 10 de Agosto - 18hs & 21hs
            </h4>
            <h4>
            ⏰ hace tu reserva anticipada.
            </h4>
            <h4>
            ☎  11 6020 9842
            </h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.img}
            src="SUPERNOVA-HOW-CUADRADO-300x300.jpg"
            alt=""
          />
          <div>
            <h2 className={styles.h4}>
            🎙️ SUPERNOVA SHOW: Mabel, Walter, Gladys, Nestor, Vicky <br />CANTANDO SUS MEJORES TEMAS
            </h2>
            <h4>
            🕺  Vamos a pasarla muy bien
            </h4>
            <h4>
            🚩 En la DAMA DE BOLLINI (PJE Bollini 2281 CABA)
            </h4>
            <h4>
            🎙 Viernes 4 de Octubre - 20:30hs
            </h4>
            <h4>
            ⏰ hace tu reserva anticipada. ENTRADAS $5000.
            </h4>
            <h4>
            ☎  11 6020 9842
            </h4>
            <a
              href="https://wa.me/541160209842"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
              className={styles.btn}
              >
                Consultas y Reservas
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
