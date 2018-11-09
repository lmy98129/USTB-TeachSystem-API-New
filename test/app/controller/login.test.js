'use strict';

const { app, assert } = require('egg-mock/bootstrap');

const mockedMsg = require('./test.config').login;

/**
  测试前 test.config.js 文件请自行建立，格式为
  {
    idNo: '学生身份证号',
    loginApi: '/StuLoginService/loginStudentByIdentity.json',
    secrite: '密码',
    stuNo: '学号',
  }
 */

describe('test/app/controller/login.test.js', () => {


  it('should status 200 and get the request body, POST /login', async () => {
    app.mockCsrf();
    const result = await app.httpRequest()
      .post('/login')
      .type('form')
      .send(mockedMsg)
      .expect(200);

    assert(result.body.status === 'success');
  });

});
