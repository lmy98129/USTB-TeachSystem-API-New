'use strict';

const BaseController = require('../core/baseController');

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class TodayController extends BaseController {
  async index() {
    const { todayUrl } = this.config.bkthink;
    await this.common('getData', createRule, todayUrl);
  }
}

module.exports = TodayController;