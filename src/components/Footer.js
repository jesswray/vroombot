import React from 'react';

const Footer = () => (
  <div className='Footer'>
    <p>vroombot (<a href='http://github.com/wrayjs/vroombot'>code here</a>) is a serverless web app I can text</p>

    <p>Built with Node.js, React, Twilio, and AWS Lambda, DynamoDB, and API Gateway</p>

    <span className='Footer__horizontal-list'>How I built this:
      <a href='http://jesswray.com/articles/2017-11/vroombot-client-side-auth-with-aws-lambda'> 1</a>
      <a href='http://jesswray.com/articles/2017-11/vroombot-reading-from-twilio-and-writing-to-dynamodb'>2</a>
      <a href='http://jesswray.com/articles/2017-12/vroombot-getting-data-out-of-dynamodb-with-aws-lambda'>3</a>
      <a href='http://jesswray.com/articles/2017-12/vroombot-putting-it-all-together-with-react'>4</a>
    </span>
  </div>
);

export default Footer;
