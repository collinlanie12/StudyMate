'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_subject', {
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      subjectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "subjects",
          key: "id"
        }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_subject');
  }
};
