var Session = {
  save: function (username, password) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
  },

  get: function () {
    var username = sessionStorage.getItem('username');
    var password = sessionStorage.getItem('password');
    return {username: username , password: password}
  },

  clear: function () {
    sessionStorage.clear();
  },

  auth_headers: function () {
    var username = sessionStorage.getItem('username');
    var password = sessionStorage.getItem('password');
    return { "Authorization": "Basic " + btoa(username + ":" + password) }
  }

};
