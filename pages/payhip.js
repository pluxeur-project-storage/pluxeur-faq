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
          Digital Development Payhips
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="https://payhip.com/DigitalDevelopment" className={styles.card}>
            <h2>Digital_Hyde</h2>
            <p>Dans Products</p>
          </a>

          <a href="https://payhip.com/DigitalDevelopmentDalesProducts" className={styles.card}>
            <h2>JamesDScott</h2>
            <p>Dales Products</p>
          </a>

          <a href="https://payhip.com/Pluxeur" className={styles.card}>
            <h2>Pluxeur</h2>
            <p>Pluxeurs Products.</p>
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
