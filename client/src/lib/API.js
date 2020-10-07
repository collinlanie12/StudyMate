import axios from 'axios';

export default {

  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users/', { email, password });
    },

    update: function (authToken, username, is_tutor, timezone, user_bio) {
      return axios.put('/api/users/', { username, is_tutor, timezone, user_bio }, {
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

    create: function (authToken, title, content, time, subjectId) {
      return axios.post('/api/posts/create', { title, content, time, subjectId }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    

    getBySubject: function (authToken, subjectId) {
      return axios.get(`/api/posts/subject/${subjectId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Subjects: {
    getAll: function () {
      return axios.get("api/subjects/");
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