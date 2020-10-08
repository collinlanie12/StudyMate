import axios from 'axios';

export default {

  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users/', { email, password });
    },

    update: function (authToken, username, is_tutor, timezone, user_bio, selectedSubjects) {
      return axios.put('/api/users/', { username, is_tutor, timezone, user_bio, selectedSubjects }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    findUser: function (UserId) {
      return axios.get(`/api/users/${UserId}`);
    }
  },

  Posts: {
    getAll: function (authToken) {
      return axios.get('/api/posts/all', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    create: function (authToken, title, content, time, SubjectId, date, link) {
      return axios.post('/api/posts/create', { title, content, time, SubjectId, date, link }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    getBySubject: function (authToken, SubjectId) {
      return axios.get(`/api/posts/subject/:${SubjectId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    getSignups: function (authToken, PostId) {
      return axios.get(`/api/posts/signup/get/${PostId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Subjects: {
    getAll: function () {
      return axios.get("api/subjects/");
    },
    findSubject: function (SubjectId) {
      return axios.get(`/api/subjects/${SubjectId}`);
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },
};
