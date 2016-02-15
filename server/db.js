const casual = require('casual');

module.exports = function () {
  return {
    projects: {
      "content": [
        {
          "id": 1,
          "title": casual.title,
          "client": casual.company_name,
          "description": casual.sentences(6)
        },
        {
          "id": 2,
          "title": casual.title,
          "client": casual.company_name,
          "description": casual.sentences(3)
        },
        {
          "id": 3,
          "title": casual.title,
          "client": casual.company_name,
          "description": casual.sentences(8)
        }
      ]
    }
  }
};
