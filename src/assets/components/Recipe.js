import styles from './Recipe.module.scss';
import recette from '../images/recette.jpg';

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recette} alt="recette" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex  justify-content-center align-items-center`}
      >
        <h3>Recette</h3>
      </div>
    </div>
  );
}

export default Recipe;
