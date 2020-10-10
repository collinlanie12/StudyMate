'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_posts', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 2,
      UserId: 1,
      is_calendar: 0
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 3,
      UserId: 1,
      is_calendar: 0
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 4,
      UserId: 3,
      is_calendar: 0
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 5,
      UserId: 2,
      is_calendar: 0
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      PostId: 6,
      UserId: 4,
      is_calendar: 0
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_posts', null, {});
  }
};
