module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render("pages/home");
  });

  app.get("*", (req, res) => {
    res.render("pages/notFound");
  });

}
