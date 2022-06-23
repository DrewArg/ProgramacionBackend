const webControllers = {
  webGetRootController(req, res) {
    res.render("layouts/index.handlebars", {
      layout: "index",
      root: "public",
    })
  },

  webGetCartController(req, res) {
    res.render("layouts/cart.handlebars", {
      layout: "cart",
      root: "public",
    })
  },

  webGet404Controller(req, res) {
    res.status(404).render("layouts/404.handlebars", {
      layout: "404",
      root: "public",
    })
  },
}

export default webControllers
