/**
 *
 * @param {import('./types').ApiGatewayEvent} event
 */
const handler = async event => {
  console.log(event);
  return {
    statusCode: 200,
    body: "Hello authorized user!"
  };
};

module.exports = {
  handler
};
