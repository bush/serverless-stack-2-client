const dev = {
  STRIPE_KEY: "pk_test_eqZiXvstFqyA9zpuseKG7d6q",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-mono-uploads-dev-s3bucket-12z3ola730ve2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://puwbz95ywl.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rKfZCIaVB",
    APP_CLIENT_ID: "23l1jov5d34368joa3q61dqa1c",
    IDENTITY_POOL_ID: "us-east-1:35e586f4-88f2-4780-b26c-58c576d4d6d7"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_eqZiXvstFqyA9zpuseKG7d6q",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-lnfa2oz8wybi"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://w4zs6vv7yi.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_U15Rf3jvw",
    APP_CLIENT_ID: "5ckjh05da8idvc8fm44s8ak4id",
    IDENTITY_POOL_ID: "us-east-1:5e387253-da01-4334-a011-acc71386e3fb"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
