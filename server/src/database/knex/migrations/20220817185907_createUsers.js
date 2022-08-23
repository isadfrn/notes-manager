exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.text('name');
    table.text('avatar').default(null);
    table.text('email');
    table.text('password');
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.createTable('users', (table) => {});
