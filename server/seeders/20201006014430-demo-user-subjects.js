'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_subject', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 2,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 10,
      UserId: 3
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 8,
      UserId: 2
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 6,
      UserId: 4
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_subject', null, {});
  }
};
