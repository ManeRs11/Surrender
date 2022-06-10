import Head from 'next/head'
import Image from 'next/image'
import styles from './../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Surrender Process</title>
        <meta name="description" content="Proceso para rendirse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Proceso para Rendirse
        </h1>

        <p className={styles.description}>
          ¿Porque?
        </p>

        <div className={styles.grid}>
          <a href="./../flow02" className={styles.card}>
            <h2>Es muy dificil</h2>
          </a>

          <a href="./../flow03" className={styles.card}>
            <h2>No me gusta</h2>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
          Surrender Process
      </footer>
    </div>
  )
}
