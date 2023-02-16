import { useState } from "react";
import style from "./SearchBar.module.css"

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState("");

   const searchChange = (e) => {
      console.log(e);
      setCharacter(e.target.value);
   }

   return (
      <div className={style.container_search}>
         <input
            className={style.input}
            type='search'
            onChange={searchChange}
         />
         <button
            className={style.button}
            onClick={() => onSearch(character)}>Agregar
         </button>
      </div>
   );
}

export default SearchBar;