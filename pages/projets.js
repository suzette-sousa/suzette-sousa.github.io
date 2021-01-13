import Head from 'next/head'
import Project from '../components/Project'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Suzette Sousa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio - Réalisations, projets" />
      </Head>
      <Project/>
    </>
  )
}
