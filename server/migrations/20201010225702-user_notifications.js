'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_notifications', {
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      NotificationsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Notifications",
          key: "id"
        }
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_notifications');
  }
};
