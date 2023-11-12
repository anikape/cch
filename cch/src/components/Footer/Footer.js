import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <section>
    <section className={styles.footerContainer}>

      <div className={styles.footerLogo}>
      <Image src='/cch.png' width={218} height={124} />
      <p>Construímos sites incríveis que cativam seus visitantes, garantindo uma experiência de usuário excepcional</p>
      </div>

      <div className={styles.footerInfo}>
        <h3>Conectamos ideias à inovação, transformando conceitos em realidade digital</h3>

        <h4>Localização</h4>

       
        <p><Image src="/map.png" width={29} height={29} /> Rua Irmã Rosali Guimarães Wanderley, 3585 - Candelária, Natal - RN, 59064-710</p>

      </div>

      <div className={styles.footerContact}>

        <h3>Contato</h3>

        <ul>
          <li><Image width={14} height={18} src='/mail.png' /> <a href='mailto:contato@codecrafthub.com.br"'>contato@codecrafthub.com.br</a></li>
          <li><Image width={14} height={18} src='/whats.png' /> <a href="https://wa.me/85991948378">+55 (85) 99194-8378</a></li>
          <li><Image width={14} height={18} src='/whats.png' /> <a href="https://wa.me/81988693599">+55 (81) 98869-3599</a></li>
        </ul>


      </div>
              
           
    
    </section>
    <div className={styles.footerSocials} >

      <p>© 2023 Todos os direitos reservados. CodeCraftHub</p>

      <nav>
        <ul>
          <li><a href="#"><Image src='/in.png' width={48} height={26}/></a></li>
          <li><a href="#"><Image src='/x.png' width={48} height={26}/></a></li>
          <li><a href="#"><Image src='/insta.png' width={48} height={26}/></a></li>
          <li><a href="#"><Image src='/facebook.png' width={48} height={26}/></a></li>
        </ul>
      </nav>
    </div>
   
    </section>
  )
}

export default Footer