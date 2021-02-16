import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - BoomD3v</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">BoomD3v</a>
        </h1>

        <p className={styles.description}>
          A coding portfolio.
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/BoomD3v/nextjs-web/" className={styles.card}>
            <h3>Web Dev Project &rarr;</h3>
            <p>My Web Dev Project using Next.js</p>
          </a>

          <a href="https://github.com/BoomD3v/nextjs-web/" className={styles.card}>
            <h3>Discord Bot Project &rarr;</h3>
            <p>[BLANK]</p>
          </a>

          <a href="/#" className={styles.card}>
            <h3>[BLANK]</h3>
            <p>[BLANK]</p>
          </a>

          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
            <h3>[BLANK]</h3>
            <p>[BLANK]</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          An experimental project.
        </p>
      </footer>
    </div>
  )
}
