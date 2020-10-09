'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'user_post',
        'is_calendar',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: 0
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Posts', 'link')
    ]);
  },
};