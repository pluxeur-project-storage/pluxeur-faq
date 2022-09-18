import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Modules/Banner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pluxeur FAQ</title>
        <meta name="description" content="Digital Development Information Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Digital Development Trellos
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.disabledcard}>
            <h2>Digital_Hyde</h2>
            <p>Dans Commissions</p>
          </a>

          <a href="https://trello.com/b/nBEq4rLN/" className={styles.card}>
            <h2>JamesDScott</h2>
            <p>Dales Commissions</p>
          </a>

          <a href="https://trello.com/b/lLqycgXv/" className={styles.card}>
            <h2>Pluxeur</h2>
            <p>Pluxeurs Commissions.</p>
          </a>

          <a href="https://trello.com/b/oetTZgKf/" className={styles.card}>
            <h2>Pluxeur</h2>
            <p>Pluxeurs Upcoming.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Pluxeur
        </a>
      </footer>
    </div>
  )
}
