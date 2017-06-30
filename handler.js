'use strict';

const DEFAULT_FOO_PATH = 'data/foo';

module.exports.hello = (event, context, callback) => {

  let fooPath = process.env.FOO_PATH || DEFAULT_FOO_PATH;

  console.log("The foo service will look for foos in " + fooPath);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
