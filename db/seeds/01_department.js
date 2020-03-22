
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('departments').del()
    .then(function () {
      // Inserts seed entries
      return knex('departments').insert([
        {id: 1, name: 'comA',location:'kelaniya'},
        {id: 2, name: 'comB',location:'colombo'},
        {id: 3, name: 'comC',location:'gampaha'}
      ]);
    });
};
