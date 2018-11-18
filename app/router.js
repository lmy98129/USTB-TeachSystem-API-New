'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.login.index);
  router.get('/login', controller.login.handshake);
  router.get('/app', controller.course.index);
  router.post('/today', controller.today.index);
};
