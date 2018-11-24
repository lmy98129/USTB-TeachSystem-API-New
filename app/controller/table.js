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
    const { courseTableUrl } = this.config.bkthink;
    await this.common('getData', createRule, courseTableUrl);
  }
}

module.exports = CourseTableController;
