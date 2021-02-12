const path = require('path');
import { attributes } from '../content/skills.md';
const Skill = () => {
  let { title, certifs } = attributes;
  return (
    <>
      <article>
        <h1 className="mb-6 text-4xl uppercase tracking-wider font-extralight text-center">{title}</h1>
        <ul>
          {certifs.map((certif, k) => (
            <li key={k} className={`flex flex-col lg:flex-row overflow-hidden bg-white rounded-sm shadow-sm mt-4 ${!certif.date ? "bg-gray-200" : ""}`}>
              {!certif.date && <div className="bg-gray-300 flex justify-center items-center text-center lg:w-40 p-5 uppercase">En préparation</div>}
              {certif.date && <div className="bg-green-200 flex justify-center flex-col items-center lg:w-40 p-5 uppercase">Obtenue le <span className="font-bold nowrap">{certif.date}</span></div>}
              <div className="p-5 flex-1 flex justify-between">
                <div className="flex justify-center flex-col">
                  <h3 className="text-xl font-bold mb-1">{certif.name}</h3>
                  {certif.description && <p>{certif.description}</p>}
                </div>
                <div className="text-right">
                  {certif.thumbnail && <img src={`/${certif.thumbnail}`} alt="" className="inline-block w-28 max-h-20" />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default Skill
