// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
  }
}
