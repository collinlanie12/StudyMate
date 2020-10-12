'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_post', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 2,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 3,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 4,
      UserId: 3
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 5,
      UserId: 2
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 6,
      UserId: 4
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_post', null, {});
  }
};
