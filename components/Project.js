const path = require('path');
import { attributes } from '../content/portfolio.md';
import React, { useState } from "react";
import Link from './Link'
const Project = () => {
  let { title, projets } = attributes;

  let catArr = []
  const mapProjets = projets.map((p) => {
    let cat = p.categories
    cat.map((e) => {
      catArr.push(e)
    })
  })

  let uniqueCats = [...new Set(catArr)];
  let categories = Array.from(uniqueCats).sort();
  let allDisplayWording = "Afficher tout";
  categories.unshift(allDisplayWording);
  const [categoryName, setCategoryName] = useState("Afficher tout");
  const [isActive, setActive] = useState(0);

  return (
    <>
      <article>
        <h1 className="mb-6 text-4xl uppercase tracking-wider font-extralight text-center">{title}</h1>
        <div className="mb-6">
          {categories.map((cat, j) => (
            <button key={j} onClick={() => {setCategoryName(cat); setActive(j);}} className={`${j === isActive ? 'bg-gray-600 text-white' : 'text-gray-600' } uppercase mr-2 mb-2 px-8 py-2 rounded border border-gray-600 max-w-max shadow-sm hover:shadow-lg`}>{cat}</button>
          ))}
        </div>
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projets
            .sort((a, b) => a.date > b.date ? 1 : -1)
            .filter(projet => categoryName !== allDisplayWording ? projet.categories.includes(categoryName): projet)
            .map((projet, k) => (
            <li key={k} className="overflow-hidden bg-white rounded-lg shadow-xl">
              <Link href={`${projet.link}`}>
                <a>
                  {projet.thumbnail && <img src={`/${projet.thumbnail}`} alt={`${projet.altimg}`} className="w-full" />}
                  <h3 className="p-4 text-lg font-bold bg-gray-900 text-white">{projet.name}</h3>
                  {projet.description && <p className="p-4">{projet.description}</p>}
                </a>
              </Link>
              {/* {projet.categories &&
                projet.categories.map((cat, j) => (
                  <div key={j}><button key={j}>{cat}</button></div>
                ))
              } */}
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default Project
