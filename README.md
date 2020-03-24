# EMS_api
employee management System api with nodejs and knex,postgresql


# Department Routes
## get All Departments
- GET
- [https://app-ems1.herokuapp.com/departments]

## add a department
- POST
- data-
`{
	"name":"comA",
	"location":"colombo"
}`
- [https://app-ems1.herokuapp.com/department]

#Employee Routes
## get All Employees
- GET
- [https://app-ems1.herokuapp.com/employees]

## add an employee
- POST
- data-
`{
	"name":"Nim",
	"age":20,
	"address":"jaffna",
	"gender":"female",
	"salary":"100000.00",
	"dep_id":1
}`
- [https://app-ems1.herokuapp.com/employee]

## Search employee of age 20 , salary > 50000
- GET
- [https://app-ems1.herokuapp.com/employee/20/50000]

## Inner Join Query- get employees by department
- GET
- [https://app-ems1.herokuapp.com/employees/department/1]
