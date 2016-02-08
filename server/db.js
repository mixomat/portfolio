const casual = require('casual');

module.exports = function () {
  return {
    projects: {
      "content": [{
        "id": 1,
        "title": casual.title,
        "client": casual.company_name
      }]
    }
  }
};
