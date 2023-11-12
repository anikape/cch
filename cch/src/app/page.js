import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Main from '@/components/Main/Main'

export default function Home() {
  return (
    
      <div className={styles.description}>
        <Header />
        <About />
        <Main />
       <Footer />
      </div>
   
  )
}
