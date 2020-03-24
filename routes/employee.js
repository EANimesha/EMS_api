
const db=require('../db/db');

exports.getAllEmployees=(req,res)=>{
    db.select().from('employees').then(function(employees){
        res.send(employees)
    })
}

exports.addEmployee=(req,res)=>{
    db('employees')
    .select('name','age','address','gender','salary','joined','dep_id')
    .insert({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        gender:req.body.gender,
        salary:req.body.salary,
        joined:new Date(),
        dep_id:req.body.dep_id
    })
    .then(()=>{
        res.json(`added employee to db`);
    })
    .catch(err=>{
        console.error(err);
        res.json({error:err.code});
    })
}

exports.searchEmployee=(req,res)=>{
    db('employees')
    .select('*')
    .where({
        age:req.params.age,
    })
    .andWhere('salary','>',`${req.params.salary}`)
    .then(function(employees){
        res.send(employees);
    })
    .catch(err=>{
        console.error(err); 
        res.json({error:err.code});
    })

}

