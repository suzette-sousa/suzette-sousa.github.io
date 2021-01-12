import { attributes } from '../content/home.md';

const Test = () => {

    let { title, cats } = attributes;
    return (
      <>
        <article>
          <h1>{title}</h1>
          
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )

}

export default Test