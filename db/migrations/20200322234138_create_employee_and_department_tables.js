
exports.up = function(knex) {
  return knex.schema.createTable('departments',function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('location').notNullable();
  })
  .createTable('employees',function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.integer('age').notNullable();
      table.string('address').notNullable();
      table.enu('gender',['male','female']);
      table.float('salary');
      table.date('joined');
      table.integer('dep_id').references('id').inTable('departments');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('employees').dropTable('departments')
};
