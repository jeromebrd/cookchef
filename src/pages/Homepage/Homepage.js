import styles from '../Homepage/Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import { data } from '../../data/recipes';
import { useState } from 'react';
import Loading from './components/Loading/Loading';

function Homepage() {
  const recipes = data;

  //pour la barre de recherche
  const [filter, setFilter] = useState('');
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  // pour le chargement des recipes
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div
        className={`card flex-fill d-flex flex-column p-20 mb-20 ${styles.contentCard}`}
      >
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className={`${styles.grid} justify-content-center br`}>
            {recipes
              .filter((r) => r.title.toLocaleLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r.id} title={r.title} image={r.image} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
