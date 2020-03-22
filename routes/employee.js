
const db=require('../db/db');

exports.getAllEmployees=(req,res)=>{
    db.select().from('employees').then(function(employees){
        res.send(employees)
    })
}