'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      content: 'Hosting tutoring event for math.',
      title: 'Calculus 2',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1,
      UserId: 1
    },
    {
      content: 'Hosting tutoring event for math.',
      title: 'Geometry',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1,
      UserId: 2
    },
    {
      content: 'Hosting tutoring event for Literature.',
      title: 'English',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 8,
      UserId: 3
    },
    {
      content: 'Hosting tutoring event for Law.',
      title: 'Law',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 6,
      UserId: 4
    },
    {
      content: 'Hosting tutoring event for Biology.',
      title: 'bio life',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 4,
      UserId: 2
    },
    {
      content: 'Hosting tutoring event for project management.',
      title: 'Project Management',
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 3,
      UserId: 3
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
