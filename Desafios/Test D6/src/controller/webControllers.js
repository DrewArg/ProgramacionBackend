function webGetRootController(req, res) {
  res.render('layouts/main.handlebars', {
      root: 'public'
  })

//   res.sendFile("index.html", { root: "./public" });
}

// function webGetRootController(req, res) {
//     res.render('layouts/main.handlebars', {
//         root: 'views'
//     })
// }

// function webGet404() {
//     (req, res, next) => {
//         res.status(404).render('./partials/404', {
//             titulo: '404',
//             descripcion: "Página no enconrtada"
//         })
//     }
// }

module.exports = { webGetRootController };
