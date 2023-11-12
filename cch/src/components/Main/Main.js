import React from 'react'
import Image from 'next/image';
import styles from './main.module.css'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      
      <h1 className={styles.mainTitle} >Quem Somos</h1>

      <Image className={styles.mainImage1} src='/image1.png' alt="Imagem de computadores e livros" width={577} height={325} />

      <p className={styles.mainP}>“Somos uma equipe apaixonada por tecnologia, dedicada a ajudar empresas a prosperar no mundo digital. Estamos comprometidos em criar soluções inovadoras que impulsionam o sucesso dos nossos clientes.”</p>

      <div className={styles.mainMission}>
       

        <ul>
        <h2>NOSSA ABORDAGEM</h2>
          <li>Consulta Inicial
            <p>Realizamos uma consulta inicial para entender seus objetivos, orçamento e cronograma.</p>
          </li>
          <li>Design e Desenvolvimento
            <p>Nossa equipe de designers e desenvolvedores cria uma estratégia e um plano de ação.</p>
          </li>
          <li>Implementação
            <p>Transformamos a estratégia em realidade, implementando e testando sua solução.</p>
          </li>
          <li>Entrega
            <p>Entregamos o projeto finalizado e oferecemos suporte contínuo, se necessário.</p>
          </li>
          
        </ul>

        <Image className={styles.mainImage1} src='/image2.png' alt="Imagem de computadores e livros" width={513} height={467} />
      </div>
      
      
    </section>
  )
}

export default Main