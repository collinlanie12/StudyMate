'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_notifications', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      NotificationId: 1,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      NotificationId: 2,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      NotificationId: 3,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      NotificationId: 4,
      UserId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      NotificationId: 5,
      UserId: 1
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_notifications', null, {});
  }
};
