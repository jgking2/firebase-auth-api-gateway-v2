const admin = require("firebase-admin");
const config = require("./firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(config)
});

/**
 *
 * @param {{ methodArn: string, authorizationToken: string}} event
 */
module.exports.handler = async event => {
  const { methodArn, authorizationToken } = event;

  const response = await admin.auth().verifyIdToken(authorizationToken);
  let Effect = "Deny";
  if (!!response) {
    Effect = "Allow";
  }
  return {
    principalId: response && response.uid,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect,
          Resource: methodArn
        }
      ]
    }
  };
};
