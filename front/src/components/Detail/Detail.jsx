import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Detail = () => {
    const { detailid } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailid]);

    return (
        <div className={style.container_detail}>
            <div className={style.information}>
                <h1>NOMBRE: {character?.name}</h1>
                <p>STATUS: {character?.status}</p>
                <p>SPECIE: {character?.species}</p>
                <p>GENDER: {character?.gender}</p>
                <p>ORIGIN: {character?.origin?.name}</p>
            </div>
            <img src={character?.image} alt="" />
            <Link to='/home'>Volver a HOME</Link>
        </div>
    )
}

export default Detail