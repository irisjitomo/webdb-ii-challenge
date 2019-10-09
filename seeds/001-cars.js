
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1233', Make: 'Lincoln', Model: 'Any car', Mileage: '123435'},
        {VIN: '1244', Make: 'Lincoln', Model: 'Any car', Mileage: '123435'},
        {VIN: '1255', Make: 'Lincoln', Model: 'Any car', Mileage: '123435'}
      ]);
    });
};
