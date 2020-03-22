const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db=require('./db/db');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app is running on port 3000`))