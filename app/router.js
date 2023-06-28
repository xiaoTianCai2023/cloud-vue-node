'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/nav/search', controller.home.search);
  router.get('/api/mp4/carousel', controller.home.carousel);
  router.get('/api/frame/tabs', controller.home.frame_tab);
  router.get('/api/frame/cards', controller.home.frame_card);
  router.get('/api/qr_code', controller.home.get_qrcode)
  router.get('/api/solution/tabs', controller.home.solution_tabs)

    // 登录
  router.post('/api/login', controller.login.login);
  router.post('/api/logout', controller.login.logout);
};
