import styles from '../Homepage/Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import { data } from '../../data/recipes';
import { useContext, useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';

function Homepage() {
  const [recipes, setRecipes] = useState([]);

  //pour la barre de recherche
  const [filter, setFilter] = useState('');
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  // pour le chargement des recipes
  const [isLoading, setIsLoading] = useState(true);

  // pour savoir quelle page de recette est chargée :
  const [page, setPage] = useState(1);

  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${BASE_URL_API}?skip=${(page - 1) * 18}&limit=18`
        );
        if (response.ok && !cancel) {
          const newRecipes = await response.json();
          setRecipes((x) =>
            Array.isArray(newRecipes)
              ? [...x, ...newRecipes]
              : [...x, newRecipes]
          );
        }
      } catch (e) {
        console.log('erreur fetch');
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchRecipes();
    return () => (cancel = true);
  }, [BASE_URL_API, page]);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  }

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
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe
                  key={r._id}
                  recipe={r}
                  toggleLikedRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary">
            Voir plus de recettes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
