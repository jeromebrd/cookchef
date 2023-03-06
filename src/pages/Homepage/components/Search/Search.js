import styles from './Search.module.scss';
export default function Search({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
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
  );
}
