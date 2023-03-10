const locals = (req, res, next) => {
    res.locals.isLogged = false;              // inicializamos la variable "isLogged" en false
    if (req.session.usuarioLogeado) {                   // preguntamos si un hay usuario en session (esto hay que guardarlo en el login con el mismo nombre)
        res.locals.isLogged = true;           // si hay un usuario en session "isLogged" cambia a TRUE
        //res.locals.user = req.session.usuarioLogeado;   // guardamos el usuario en "locals" para que este disponible en las vistas
    } 

    next();

}

module.exports = locals