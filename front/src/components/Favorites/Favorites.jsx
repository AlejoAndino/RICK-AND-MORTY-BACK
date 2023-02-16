import { useSelector, useDispatch } from "react-redux";
import style from './Favorites.module.css'
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.cards}>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {
                myFavorites.map(character => {
                    return (
                        <div className={style.container_card}>
                            <div className={style.container_name}>
                                <Link to={`/detail/${character.id}`}>
                                    <h2 className={style.name}>{character.name}</h2>
                                </Link>
                                <img className={style.img} src={character.image} alt={character.name} />
                            </div>
                            <div className={style.container_gender}>
                                <h2 className={style.title}>{character.species}</h2>
                                <h2 className={style.title}>{character.gender}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;