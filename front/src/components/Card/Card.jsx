import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card({ id, name, gender, onClose, species, image }) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else {
         setIsFav(true);
         dispatch(addFavorite({ id, name, gender, onClose, species, image }));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container_card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.button} onClick={onClose}>X</button>
         <div className={style.container_name}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2>
            </Link>
            <img className={style.img} src={image} alt={name} />
         </div>
         <div className={style.container_gender}>
            <h2 className={style.title}>{species}</h2>
            <h2 className={style.title}>{gender}</h2>
         </div>
      </div>
   );
}


export default Card;