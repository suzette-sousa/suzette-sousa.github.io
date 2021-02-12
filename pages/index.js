import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const videoRef = useRef();

  // useEffect(() => {
  //     setTimeout(()=>{
  //         videoRef.current.play()
  //     },5000)
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Intégratrice Front-End - Suzette Sousa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Intégratrice web sénior. Intégration et développement front-end, création ou refonte de site internet, référencement, bonnes pratiques, accessibilité, performances" />
      </Head>

      {/* <video ref={videoRef} controls width="250"
            loop
            muted
            >
              <source src="/vid/laptop.mp4" type="video/mp4"/>
       </video> */}

      <div className={styles.fullscreen_bg}>
        <video ref={videoRef} controls autoPlay muted loop className={styles.fullscreen_bg_video}>
          <source src="/vid/program.mp4" type="video/mp4"/>
        </video>
      </div>
        <div className="container m-auto relative z-1 text-white">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 lg:p-0 p-7">
              <h1 className="text-5xl font-bold leading-tight mb-5 capitalize">Intégratrice Front-End</h1>
              <p className="text-2xl">
                Ayant acquis une expérience certaine en intégration web, je suis actuellement en train de monter en compétences en développement javascript pour acquérir un niveau avancé et sur React également.
              </p>
              <p className="mt-2">Et d'autres choses aussi en fait ! :)</p>
              <div className="my-8">
                <Link href="/projets">
                  <a href="#" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-blue-700 hover:bg-blue-900 inline-block border bg-blue-900mr-3">Voir mes projets</a>
                </Link>
                <Link href="/cv">
                  <a href="#" className="my-8 mx-4 text-white rounded-full py-2 px-5 text-lg font-semibold bg-gray-500 hover:bg-gray-700 inline-block border bg-gray-500 mr-3">Voir mon CV</a>
                </Link>
              </div>
            </div>
            {/* <div className="lg:w-6/12 order-2">
              <img className={styles.prezImg} src="/img/computer.jpg" alt="" />
            </div> */}
          </div>
        </div>
    </div>
  )
}
