'use strict';

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
    courseScheduleUrl: `${serverUrl}/StuQueryInfoService/viewStuCourseSchedule.json`,
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

  return config;
};
