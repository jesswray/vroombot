import React from 'react';

const Footer = () => (
  <div className='Footer'>
    <div>Built with Node.js and React
      (<a href='http://github.com/wrayjs/vroombot'>code here</a>)
    </div>
    <span>How I built this: </span>
    <a href='http://jesswray.com/articles/2017-11/vroombot-client-side-auth-with-aws-lambda'>1</a>
    <a href='http://jesswray.com/articles/2017-11/vroombot-reading-from-twilio-and-writing-to-dynamodb'>2</a>
    <a href='http://jesswray.com/articles/2017-12/vroombot-getting-data-out-of-dynamodb-with-aws-lambda'>3</a>
    <a href='http://jesswray.com/articles/2017-12/vroombot-putting-it-all-together-with-react'>4</a>
  </div>
);

export default Footer;
