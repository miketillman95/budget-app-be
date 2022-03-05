/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  
    return knex.schema.createTable('users', users => {
      users.increments("id");
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('email', 255).notNullable().unique()
    })
  
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
  };
  