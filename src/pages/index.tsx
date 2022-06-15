import { useRouter } from "next/router"
import { useEffect } from "react"

// import Head from 'next/head';
// import styles from './home.module.scss'

export default function Home() {
  const router = useRouter();

  useEffect( () => {
    router.push('/posts')
  }, [router])

    // <>
    //   <Head>
    //     <title>Blog</title>
    //   </Head>
    //   <section className={styles.section}>
    //     <h1>
    //       Hello world!
    //     </h1>
    //   </section>
    // </>

}