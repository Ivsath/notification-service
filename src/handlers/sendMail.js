import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-west-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'reyes.yerp@gmail.com',
    Destination: {
      ToAddresses: ['reyes.yerp@hotmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from AWS SES',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
