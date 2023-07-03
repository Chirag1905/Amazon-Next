import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Footer } from './Components/Footer'

export default function Home() {
  return (
    <>
    {/* <h1>Hello World</h1> */}
    <Header/>
    <Hero/>
    <Footer/>
    </>
  )
}
