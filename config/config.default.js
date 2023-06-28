/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};


  config.middleware = ['login'];
  config.login = {
    ignore: ['/api/login', '/api/register', '/api/logout']
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1678265592865_9096';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.session = {
    key: 'scrum_login',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
