import styles from '../components/Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';

function Content() {
  const recipes = data;
  return (
    <div className="container flex-fill p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={`${styles.grid} justify-content-center br`}>
          {recipes.map((r) => (
            <Recipe key={r.id} title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
