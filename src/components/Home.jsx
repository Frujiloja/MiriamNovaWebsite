import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.container} id="home">
        <div className={styles.background}></div>
        <div className={styles.presentation}>
          <h1 className={styles.h1}>
            Miriam <span className={styles.nova}>Nova</span>
          </h1>
          <h2 className={styles.h2}>Actriz, Cantante</h2>
          <h2 className={styles.h2}>Docente de Canto y Teatro.</h2>
        </div>
      </div>
      <div className={styles.containerx} id="about">
        <h1 className={styles.h1xx}>
Clases de Canto y Teatro. <br />Presenciales y Online</h1>
        <div className={styles.images}>
          <a href="/shows"><img src="shows.jpg" alt="1" className={styles.img} /></a>
          
          <img src="canto presencial.jpg" alt="1" className={styles.img} />
          <img src="canto virtual.jpg" alt="2" className={styles.img} />
          <img src="teatro.jpg" alt="3" className={styles.img} />
        </div>
        <a href="#home">
          <img src="arrow.png" alt="arrow icon" className={styles.arrow} />
        </a>
      </div>
    </div>
  );
};

export default Home;
