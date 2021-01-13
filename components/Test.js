import { attributes } from '../content/home.md';

const Test = () => {

    let { title, projets } = attributes;
    return (
      <>
        <article>
          <h2>{title}</h2>
          
          <ul>
            {projets.map((cat, k) => (
              <li key={k}>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )

}

export default Test