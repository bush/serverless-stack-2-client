const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-caoub5um981g"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8jr3jjf0nj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Cp3K3yFWE",
    APP_CLIENT_ID: "14l5rik9cmh6noo9r4dv3ne9ku",
    IDENTITY_POOL_ID: "us-east-1:dced38be-671e-4fe5-be75-bc8274efbd6f"
  }
};

const prod = {
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
