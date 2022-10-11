import styles from '../components/Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';
import { useState } from 'react';

function Content() {
  const recipes = data;

  //pour la barre de recherche
  const [filter, setFilter] = useState('');
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="container flex-fill p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div
          className={` d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15 "></i>
          <input
            onInput={handleInput}
            type="text"
            className="flex-fill"
            placeholder="Rechercher"
          />
        </div>
        <div className={`${styles.grid} justify-content-center br`}>
          {recipes
            .filter((r) => r.title.toLocaleLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r.id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
