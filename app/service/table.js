'use strict';

const { Service } = require('egg');
const request = require('request-promise').defaults({ jar: true });

class CourseTableService extends Service {
  async index(data) {
    const { loginUrl, courseTableUrl } = this.config.bkthink;
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
          url: courseTableUrl,
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

module.exports = CourseTableService;
