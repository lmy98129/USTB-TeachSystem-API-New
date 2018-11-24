'use strict';

const BaseController = require('../core/baseController');

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class LoginController extends BaseController {
  async index() {
    await this.common('index', createRule);
  }
  async handshake() {
    this.ctx.body = {
      status: 'handshake success',
    };
  }
}

module.exports = LoginController;
