'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Posts',
        'time',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Posts',
        'date',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Posts',
        'link',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Posts', 'time'),
      queryInterface.removeColumn('Posts', 'date'),
      queryInterface.removeColumn('Posts', 'link')
    ]);
  },
};
