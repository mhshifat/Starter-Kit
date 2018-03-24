import chalk from "chalk";
import express from "express";
import hbs from "hbs";
import logger from "morgan";
import bodyParser from "body-parser";
import flash from "connect-flash";
import session from "express-session";
const MongoConnect = require("connect-mongo")(session);

const db = require("./database/dbConnection");

const port = process.env.PORT || 5000;

hbs.registerPartials('views/includes');

const app = express();

app.set('view engine', 'hbs');

app.use(session({
  secret: "Mehedi Hassan Shifat",
  resave: true,
  saveUninitialized: false,
  store: new MongoConnect({
    mongooseConnection: db.db
  })
}));

app.use(express.static('public'));
app.use(logger('dev'));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require("./routes/routes")(app);

app.listen(port, () => {
  console.log(chalk.green(`The Server Has Started on http://localhost:${port}`));
});
