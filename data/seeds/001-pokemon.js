exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('pokemon')
    .truncate()
    .then(function() {
      return knex('pokemon').insert([
        { name: 'charizard' },
        { name: 'pikachu' },
        { name: 'slomo' },
        { name: 'bulbasor' },
      ]);
    });
};
