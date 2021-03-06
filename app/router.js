'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/table', controller.table.index);
  router.get('/', controller.course.index);
  router.post('/today', controller.today.index);
  router.get('/login', controller.login.handshake);
  router.post('/login', controller.login.index);
  router.post('/profile', controller.profile.index);
};
