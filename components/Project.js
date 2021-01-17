const path = require('path');
import { attributes } from '../content/portfolio.md';
import Link from './Link'
const Project = () => {
  let { title, projets, cat } = attributes;


  console.log(projets[0].cat[0], "dgdfvfd")

  return (
    <>
      <button className="bg-black text-white">Afficher tout</button>





      <article>
        <h1 className="mb-6 text-4xl uppercase tracking-wider font-extralight text-center">{title}</h1>
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projets.map((projet, k) => (
            <li key={k} className="overflow-hidden bg-white rounded-lg shadow-xl">
              <Link href={`${projet.link}`}>
                <a>
                  {projet.thumbnail && <img src={`/img/${projet.thumbnail}`} alt={`${projet.altimg}`} className="w-full" />}
                  <h3 className="p-4 text-lg font-bold bg-gray-900 text-white">{projet.name}</h3>
                  {projet.description && <p className="p-4">{projet.description}</p>}
                </a>
              </Link>
              {projet.categories &&
                projet.categories.map((e, j) => (
                  <div key={j}><button key={j}>{e}</button></div>
                ))
              }
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default Project
