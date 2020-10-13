'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [{
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting Calculus study session',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1
    },
    {
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting java basics tutoring session',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 2
    },
    {
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting python study session',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 2
    },
    {
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting project management study sessions',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 3
    },
    {
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting Into to Biology study session',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 4
    },
    {
      image: 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Hosting bar exam review study session',
      atTime: "3pm",
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 6
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};