import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutInovation}>
        <div className={styles.aboutText}>
          <h1>Inovação Tecnológica para o seu Negócio</h1>
          <p>
            Transforme a sua visão em realidade com a nossa experiência em
            desenvolvimento web e design.
          </p>

          <div className={styles.buttons}>
            <a href="#" className={styles.button1}>
              Quem Somos
            </a>

            <a href="#" className={styles.button2}>
              Contato
            </a>
          </div>
        </div>

        <div className={styles.aboutLogo}>
          <Image
            className={styles.logoImage}
            src="/logo.png"
            width={418}
            height={435}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
