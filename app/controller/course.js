'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
  async index() {
    const ctx = this.ctx
    await ctx.render('index.html');
    ctx.set({
      'Connection':'keep-alive'
    })
    ctx.status = 200;
  }
}

module.exports = CourseController;