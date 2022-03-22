import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Comps/Footer'
import Navbar from '../Comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Chale-list | Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <div >
        <h1 className={ styles.title }>Hello Chale</h1>
        <p className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore soluta, maiores ea sit quaerat vel praesentium totam doloribus inventore ad, commodi error amet modi quo rem delectus? Repellat, impedit reprehenderit!</p>
        <p className={ styles.text }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum ea quisquam cumque perferendis et tenetur quas ut quo numquam repudiandae autem deleniti eaque, amet harum ipsum vel, ducimus temporibus.</p>
        <Link href="/people">
          <a className={ styles.btn }>See People Listing</a>
        </Link>
      </div>
    </>
    
  )
}
