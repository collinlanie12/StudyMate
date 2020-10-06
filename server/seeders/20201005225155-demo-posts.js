'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      content: 'Hosting tutoring event for math.',
      title: 'Calculus 2',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 1,
    },
    {
      content: 'Hosting tutoring event for math.',
      title: 'Geometry',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 1,
    },
    {
      content: 'Hosting tutoring event for Literature.',
      title: 'English',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 8,
    },
    {
      content: 'Hosting tutoring event for Law.',
      title: 'Law',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 6,
    },
    {
      content: 'Hosting tutoring event for Biology.',
      title: 'bio life',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 4,
    },
    {
      content: 'Hosting tutoring event for project management.',
      title: 'Project Management',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      subjectId: 3,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
