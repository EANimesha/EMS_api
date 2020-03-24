const db=require('../db/db');

exports.getAllDepartments=(req,res)=>{
    db.select().from('departments').then(function(departments){
        res.send(departments)
    })
}

exports.addDepartment=(req,res)=>{
    db('departments')
    .select('name','location')
    .insert({
        name:req.body.name,
        location:req.body.location
    })
    .then(()=>{
        res.json(`added department to db`);
    })
    .catch(err=>{
        console.error(err);
        res.json({error:err.code});
    })
}
