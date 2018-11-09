'use strict';

const Controller = require('egg').Controller;

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class LoginController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 的合法性
    ctx.validate(createRule, ctx.request.body);
    // 校验成功则返回
    try {
      const loginResult = await ctx.service.login.index(ctx.request.body);
      ctx.body = {
        status: 'success',
        data: JSON.parse(loginResult),
      };
      ctx.status = 200;
    } catch (error) {
      ctx.body = {
        status: 'failed',
        error,
      };
    }
  }
  async handshake() {
    this.ctx.body = {
      status: 'handshake success',
    };
  }
}

module.exports = LoginController;
