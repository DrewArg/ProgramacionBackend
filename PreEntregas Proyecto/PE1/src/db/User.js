class User {
    constructor(name, password, isAdmin) {
        if (!name) throw new Error('falta agregar el nombre de usuario');
        if (!password) throw new Error('falta agregar la contraseña para el loggin');
        if (!isAdmin) throw new Error('falta veríficar si el usuario es administrador o no');
        this.name = name;
        this.password = password;
        this.isAdmin = isAdmin;
        //cada usuario deberia tener su propio carrito
        // this.cart = new ProductArchiveContainer()
    }
}

module.exports = User;