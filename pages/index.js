import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intégratrice Front-End - Suzette Sousa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Intégratrice web sénior. Intégration et développement front-end, création ou refonte de site internet, référencement, bonnes pratiques, accessibilité, performances" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Intégratrice Front-End
        </h1>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </main>

      <footer className={styles.footer}>Suzette Sousa - 2021</footer>
    </div>
  )
}
