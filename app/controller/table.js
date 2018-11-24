'use strict';

const BaseController = require('../core/baseController');

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class CourseTableController extends BaseController {
  async index() {
    const ctx = this.ctx;
    await this.common(ctx.service.table, createRule);
  }
}

module.exports = CourseTableController;
