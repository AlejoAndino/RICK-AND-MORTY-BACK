import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, Link } from "react-router-dom";

export default function Nav({onSearch}) {
    const { pathname } = useLocation();
    return (
        pathname !== '/' ? (
        <div className={style.container}>
            <SearchBar onSearch={onSearch}/>
            <div className={style.about}>
                <Link to="/" className={style.link}>LOGOUT</Link>
                <Link to='/home' className={style.link}>Home</Link>
                <Link to='/favorites' className={style.link}>Favorites</Link>
                <Link to='/about' className={style.link}>About</Link>
            </div>
        </div>
        ) : null
    )
}