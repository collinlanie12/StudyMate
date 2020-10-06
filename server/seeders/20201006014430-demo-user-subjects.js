'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_subject', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 1,
      userId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 2,
      userId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 10,
      userId: 3
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 8,
      userId: 2
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 6,
      userId: 4
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_subject', null, {});
  }
};
