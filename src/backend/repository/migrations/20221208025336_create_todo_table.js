
exports.up = function(knex) {
    return knex.schema
    .createTable('todos', function (table) {
      table.increments('id');
      table.string('description', 255).notNullable();
      table.enu('status', ['active', 'complete'])
      table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('todos');
};
