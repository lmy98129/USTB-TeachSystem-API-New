'use strict';

const { Service } = require('egg');
const request = require('request-promise').defaults({ jar: true });

class TodayService extends Service {
  async index(data) {
    const { loginUrl, todayUrl } = this.config.bkthink;
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
          url: todayUrl,
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

module.exports = TodayService;