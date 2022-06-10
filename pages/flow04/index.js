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
          ¿Vale la pena el esfuerzo para hacerlo mas agradable?
        </p>

        <div className={styles.grid}>
          <a href="./../go" className={styles.card}>
            <h2>SI</h2>
          </a>

          <a href="./../gout" className={styles.card}>
            <h2>NO</h2>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
          Surrender Process
      </footer>
    </div>
  )
}
