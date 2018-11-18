'use strict';

const Controller = require('egg').Controller;

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class TodayController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 的合法性
    ctx.validate(createRule, ctx.request.body);
    // 校验成功则返回
    try {
      const todayResult = await ctx.service.today.index(ctx.request.body);
      if (todayResult.status === 'failed') {
        ctx.body = {
          status: 'failed',
        };
        ctx.status = todayResult.err.statusCode || 200;
      } else {
        ctx.body = {
          status: 'success',
          data: JSON.parse(todayResult),
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

module.exports = TodayController;