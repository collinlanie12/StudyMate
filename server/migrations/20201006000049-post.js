'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      SubjectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Subjects",
          key: "id"
        }
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            model: "Users",
            key: "id"
          }
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};