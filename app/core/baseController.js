'use strict';
const { Controller } = require('egg')

class BaseController extends Controller {
  async common(service, createRule, ...params) {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 的合法性
    ctx.validate(createRule, ctx.request.body);
    // 校验成功则返回
    try {
      const loginResult = await ctx.service.login[service](ctx.request.body, ...params);
      if (loginResult.status === 'failed') {
        ctx.body = {
          status: 'failed',
        };
        ctx.status = loginResult.err.statusCode || 200;
      } else {
        ctx.body = {
          status: 'success',
          data: JSON.parse(loginResult),
        };
        ctx.status = 200;
      }
    } catch (error) {
      ctx.body = {
        status: 'failed',
        error,
      };
      ctx.status = 200;
      ctx.logger.error(error);
    }
  }
}

module.exports = BaseController;