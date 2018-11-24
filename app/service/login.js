'user strict';

const { Service } = require('egg');
const request = require('request-promise').defaults({ jar: true });

class LoginService extends Service {
  async index(data) {
    const { loginUrl } = this.config.bkthink;
    return await request({
      url: loginUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
      .then(resp => resp)
      .catch(err => {
        this.ctx.logger.error(err);
        return {err, status: 'failed'}
      })
  }
  
  async getData(data, url) {
    const { loginUrl } = this.config.bkthink;
    return await request({
      url: loginUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        return request({
          url,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        });
      })
      .then(resp => resp)
      .catch(err => {
        this.ctx.logger.error(err);
        return {err, status: 'failed'}
      })
  }
}

module.exports = LoginService;