'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'collinlanier12@gmail.com',
      username: 'collinlanie12',
      password: 'rootroot',
      is_student: 1,
      is_tutor: 0,
      timezone: -5,
      user_bio: 'I like to do whatever I want to do.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'gino@gmail.com',
      username: 'toomuchbob',
      password: 'rootroot',
      is_student: 1,
      is_tutor: 1,
      timezone: -5,
      user_bio: 'I like to do study and drink.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'soleman@gmail.com',
      username: 'solemansay',
      password: 'rootroot',
      is_student: 1,
      is_tutor: 0,
      timezone: -5,
      user_bio: 'I like to play apex. I am an incredible friend.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'jordan@gmail.com',
      username: 'bnenigma',
      password: 'rootroot',
      is_student: 1,
      is_tutor: 1,
      timezone: -5,
      user_bio: 'I like to film and I am a front-end wizard',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
