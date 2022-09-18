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
          Welcome to <a href="https://en.wikipedia.org/wiki/Draft:Pluxeur">Pluxeur FAQ</a>
        </h1>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <a href="https://docs-digitaldev.netlify.app" className={styles.card}>
            <h2>Digital Dev Docs</h2>
            <p>Digital Development Documentation.</p>
          </a>

          <a href="https://discord.gg/fTj3WMrt7P" className={styles.card}>
            <h2>Genisys ELS</h2>
            <p>Roblox ELS Development Studio.</p>
          </a>

          <a href="https://pluxeur-faq.vercel.app/payhip" className={styles.card}>
            <h2>Payhip Stores &rarr;</h2>
            <p>our Payhip stores for Digital Development.</p>
          </a>

          <a href="https://pluxeur-faq.vercel.app/trello" className={styles.card}>
            <h2>Trello Boards &rarr;</h2>
            <p>Our trello boards for Digital Development.</p>
          </a>

          <a href="https://discord.gg/sbfu9X9HSD" className={styles.card}>
            <h2>Pluxeur Discord</h2>
            <p>Our discord for Pluxeur.</p>
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
