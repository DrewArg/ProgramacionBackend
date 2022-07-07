function webGetRootController(req, res) {
  res.render("layouts/main.handlebars", {
    root: "public",
  });
}

export { webGetRootController };
