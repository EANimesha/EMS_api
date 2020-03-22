const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const {getAllEmployees,getOneEmployee}=require('./routes/employee');

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/employees',getAllEmployees);



app.listen(port, () => console.log(`app is running on port 3000`))