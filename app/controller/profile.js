'use strict';

const BaseController = require('../core/baseController');

const createRule = {
  idNo: 'string',
  loginApi: 'string',
  secrite: 'string',
  stuNo: 'string',
};

class ProfileController extends BaseController {
  async index() {
    const ctx = this.ctx
    const { profileUrl } = this.config.bkthink;
    const { stuNo } = ctx.request.body;
    await this.common('getData', createRule, profileUrl, { stuNo });
  }
}

module.exports = ProfileController;