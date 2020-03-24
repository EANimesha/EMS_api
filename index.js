const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var pg=require('pg');

const {getAllEmployees,addEmployee,searchEmployee,getDepartmentEmployees}=require('./routes/employee');
const {getAllDepartments,addDepartment}=require('./routes/department');

app.use(bodyParser.json());
app.use(cors());

// pg.defaults.ssl = true;

const port = process.env.PORT || 3000;

app.get('/employees',getAllEmployees);
app.post('/employee',addEmployee);
app.get('/employee/:age/:salary',searchEmployee);
app.get('/employees/department/:id',getDepartmentEmployees);

app.get('/departments',getAllDepartments);
app.post('/department',addDepartment);


app.listen(port, () => console.log(`app is running on port 3000`))