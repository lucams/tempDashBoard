'use strict';
module.exports = function(app) {
  var tempList = require('../controllers/tempDashBoardController');

  // todoList Routes
  app.route('/temp')
    .get(tempList.list_all_temp)
    .post(tempList.create_a_temp);


  app.route('/temp/:tempId')
    .get(tempList.read_a_temp)
    .put(tempList.update_a_temp)
    .delete(tempList.delete_a_temp);
};