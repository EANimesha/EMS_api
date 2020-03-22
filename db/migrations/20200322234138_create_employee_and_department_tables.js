
exports.up = function(knex) {
  return knex.schema.createTable('departments',function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('location').notNullable();
  })
  .createTable('employees',function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('address').notNullable();
      table.integer('dep_id').references('id').inTable('departments');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('employees').dropTable('departments')
};
