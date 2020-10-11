'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_posts', {
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      PostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Posts",
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
      },
      is_calendar: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: 0
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_posts');
  }
};
