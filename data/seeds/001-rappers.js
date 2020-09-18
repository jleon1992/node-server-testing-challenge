exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('rappers')
    .truncate()
    .then(function() {
      return knex('rappers').insert([
        { name: 'eminem' },
        { name: '50 cent' },
        { name: 'J. Cole' },
        { name: 'Rick Ross' },
      ]);
    });
};
