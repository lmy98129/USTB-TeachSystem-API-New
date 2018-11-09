'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(data) {
    const { loginUrl } = this.config.bkthink;
    const loginResult = await this.ctx.curl(loginUrl, {
      method: 'POST',
      data,
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
    });
    return loginResult.data;
  }
}

module.exports = LoginService;
