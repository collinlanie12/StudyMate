'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      content: 'Hosting tutoring event for math.',
      title: 'Calculus 2',
      time: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1,
      UserId: 1,
      date: "2020-10-08",
      link: "https://www.zoom.com"
    },
    {
      content: 'Hosting tutoring event for math.',
      title: 'Geometry',
      time: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 1,
      UserId: 2,
      date: "2020-10-13",
      link: "https://www.zoom.com"
    },
    {
      content: 'Hosting tutoring event for Literature.',
      title: 'English',
      time: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 8,
      UserId: 3,
      date: "2020-10-13",
      link: "https://www.zoom.com"
    },
    {
      content: 'Hosting tutoring event for Law.',
      title: 'Law',
      time: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 6,
      UserId: 4,
      date: "2020-10-14",
      link: "https://www.zoom.com"
    },
    {
      content: 'Hosting tutoring event for Biology.',
      title: 'bio life',
      time: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 4,
      UserId: 2,
      date: "2020-10-14",
      link: "https://www.zoom.com"
    },
    {
      content: 'Hosting tutoring event for project management.',
      title: 'Project Management',
      time: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
      SubjectId: 3,
      UserId: 3,
      date: "2020-10-17",
      link: "https://www.zoom.com"
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
