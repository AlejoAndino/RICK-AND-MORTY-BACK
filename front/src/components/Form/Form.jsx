import style from './Form.module.css'
import { useState } from 'react';
import validation from './validation';

const Form = ({ login }) => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form className={style.container_form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
                {errors.username && <p className={style.errors}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
                {errors.password && <p className={style.errors}>{errors.password}</p>}
            </div>
            <div>
                <button className={style.login}>LOGIN</button>
            </div>
        </form>
    )
}

export default Form