interface AuthorizerPayload {
  claims: {
    aud: string;
    auth_time: string;
    email: string;
    email_verified: string;
    exp: string;
    firebase: string;
    iat: string;
    iss: string;
    name: string;
    sub: string;
    user_id: string;
  };
  scopes: null; //Can be something else
}

interface RequestContext {
  resourceId: string;
  resourcePath: string;
  httpMethod: string;
  extendedRequestId: string;
  requestTime: string;
  path: string;
  accountId: string;
  protocol: string;
  stage: string;
  domainPrefix: string;
  requestTimeEpoch: number;
  requestId: string;
  /**
   * Used for cognito it seems, so not used here
   */
  identity: any;

  authorizer?: AuthorizerPayload;
  domainName: string;
  apiId: string;
}

export interface ApiGatewayEvent {
  path: string;
  httpMethod: string;
  headers: { [index: string]: string };
  queryStringParameters: null;
  multiValueQueryStringParameters: null;
  pathParameters: null;
  stageVariables: null;

  body: string;
  isBase64Encoded: boolean;
  /**
   * version 2 property, null on v1
   */
  version?: 2;
  requestContext: RequestContext;
}
