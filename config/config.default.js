'use strict';
const path = require('path');

module.exports = appInfo => {

  const serverUrl = 'http://student.bkthink.com/smvc';

  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541746164983_153';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  config.errorHandler = {
    match: [ '/*' ],
  };

  config.bkthink = {
    serverUrl,
    loginUrl: `${serverUrl}/StuLoginService/loginStudentByIdentity.json`,
    courseTableUrl: `${serverUrl}/StuQueryInfoService/viewStuCourseSchedule.json`,
    todayUrl: `${serverUrl}/CommonService/obtainCommonInfo.json`,
    profileUrl: `${serverUrl}/CommonService/obtainCurUserStu.json`,
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      headerName: 'csrftoken',
    },
  };

  config.view = {
    root: path.join(appInfo.baseDir, 'app/public'),
    defaultViewEngine: 'nunjucks',
  }

  return config;
};
