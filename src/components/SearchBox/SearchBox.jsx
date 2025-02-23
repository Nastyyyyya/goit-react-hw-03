import style from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <label className={style.searchBox}>
        Find contacts by name
        <input
          id="searchInput"
          className={style.searchInput}
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
