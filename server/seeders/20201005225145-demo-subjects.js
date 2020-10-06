'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subjects', [{
      subject: 'Engineering & Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Computer Science & Information Systems',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Business & Management Studies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Medicine',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Economics & Econometrics',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Law',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Mechanical, Aeronautical & Manufacturing Engineering',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Arts & Humanities',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Architecture',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject: 'Accounting & Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subjects', null, {});
  }
};
