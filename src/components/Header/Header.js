import styles from './Header.module.scss';
import cookchef from '../../assets/images/cookchef.png';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { useState } from 'react';

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <div className="flex-fill">
        <img
          onClick={() => setPage('homepage')}
          src={cookchef}
          alt="logo cookchef"
        />
      </div>
      <ul className={styles.headerList}>
        <button
          onClick={() => setPage('admin')}
          className="btn btn-primary mr-15"
        >
          Ajouter une recette
        </button>
        <button className="btn btn-reverse-primary mr-15">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>

        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars mr-15 ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div
            onClick={() => {
              setShowMenu(false);
            }}
            className="calc"
          ></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
