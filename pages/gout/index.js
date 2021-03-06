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
          RINDETE
        </h1>

        <p className={styles.description}>
          Es momento de rendirse
        </p>

      </main>

      <footer className={styles.footer}>
          Surrender Process
      </footer>
    </div>
  )
}
