const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1234",
    database: "ems"
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.listen(port, () => console.log(`app is running on port 3000`))