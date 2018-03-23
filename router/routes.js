module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render("home");
  });

  app.get("*", (req, res) => {
    res.render("notFound");
  });

}
