
exports.seed = function(knex, Promise) {
  return knex('techs').del()
    .then(function () {
      return knex('techs').insert([
        {id: 1, tech_name: 'HTML', tests: 'Cheerio'},
        {id: 2, tech_name: 'React', tests: 'Enzyme, Ava'},
        {id: 3, tech_name: 'Handlebars', tests: 'Cheerio'},
        {id: 4, tech_name: 'API/Servers', tests: 'Supertest'}
      ]);
    });
};
