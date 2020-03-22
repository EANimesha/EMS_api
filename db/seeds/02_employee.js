
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {id: 1, name: 'Peter',address:'kelaniya',dep_id:1},
        {id: 2,  name: 'Nim',address:'kelaniya',dep_id:2},
        {id: 3,  name: 'Dil',address:'kelaniya',dep_id:1}
      ]);
    });
};
