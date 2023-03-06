import styles from '../Homepage/Homepage.module.scss';
import Recipe from './components/Recipe/Recipe';
import { useContext, useState } from 'react';
import Loading from './components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';
import Search from './components/Search/Search';
import { useFetchData } from '../../hooks';

function Homepage() {
  //pour la barre de recherche
  const [filter, setFilter] = useState('');

  // pour savoir quelle page de recette est chargée :
  const [page, setPage] = useState(1);

  const BASE_URL_API = useContext(ApiContext);
  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  }

  function deleteRecipe(_id) {
    setRecipes(recipes.filter((r) => r._id !== _id));
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div
        className={`card flex-fill d-flex flex-column p-20 mb-20 ${styles.contentCard}`}
      >
        <Search setFilter={setFilter} />
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
                  deleteRecipe={deleteRecipe}
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
