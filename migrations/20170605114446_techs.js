
exports.up = function (knex, Promise) {
  return knex.schema.createTable('techs', function (table) {
    table.increments('id').primary()
    table.string('tech_name')
    table.string('tests')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('techs')
}
