/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('budget', users => {
        users.increments("id");
        users.integer('expenses', 10).notNullable()
        users.integer('income', 10).notNullable();
        users.string('category', 255).notNullable()
      })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
