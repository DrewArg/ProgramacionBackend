function webGetLoginController(req, res) {
    res.render('layouts/login.handlebars', {
        layout: 'login', root: 'public'
    })
}

function webGetRootController(req, res) {
    res.render('layouts/index.handlebars', {
        layout: 'index', root: 'public'
    });

}

function webGetCartController(req, res) {
    res.render('layouts/cart.handlebars', {
        layout: 'cart', root: 'public'
    });

}

function webGet404Controller() {
    (req, res) => {
        res.status(404).render('layouts/404.handlebars', {
            layout: '404', root: 'public'
        });
    }
}

module.exports = { webGetLoginController, webGetRootController, webGetCartController, webGet404Controller };
