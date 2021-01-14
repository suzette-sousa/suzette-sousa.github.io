import Head from 'next/head'
import Skill from '../components/Skill'

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Suzette Sousa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio - Compétences, spécialisations, certifications" />
      </Head>
      <Skill/>
    </>
  )
}
