import styles from './Header.module.scss';
import cookchef from '../images/cookchef.png';

function Header() {
  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>
      <ul className="d-flex">
        <li>
          <button className="btn btn-reverse-primary mr-15">
            <i className="fa-solid fa-basket-shopping mr-5"></i>
            <span>Panier</span>
          </button>
        </li>
        <li>
          <button className="btn btn-primary">Connexion</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
