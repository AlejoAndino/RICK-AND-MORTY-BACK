const validation = (userData) => {
    let errors = {};

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.username)) {
        errors.username = "El email no es valido";
    }
    if (!userData.username) {
        errors.username = "Este campo no debe estar vacio";
    }
    if (userData.username.length > 35) {
        errors.username = "El email no puede superar los 35 caracteres";
    }
    if (!userData.password.match(/\d/)) {
        errors.password = "La contraseña debe contener un numero";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation