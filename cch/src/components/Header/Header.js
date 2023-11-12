import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  const handleSearch = (searchTerm) => {
    const isWordPresent = document.body.innerText.includes(searchTerm);
    console.log(
      `A palavra "${searchTerm}" está presente na página: ${isWordPresent}`,
    );
  };
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <a href="#">Inicial</a>
          </li>
          <li>
            <a href="#">Portifólio</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Fale Conosco</a>
          </li>
        </ul>
        <input className={styles.headerInput} />
        <button className={styles.headerButton}>
        <Image className={styles.headerLupa}  src="/lupa.png" alt="Ícone de Pesquisa" width={20} height={20} />
        </button>
      </nav>
      
    </div>
  );
};

export default Header;