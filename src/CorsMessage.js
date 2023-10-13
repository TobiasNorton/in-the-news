import React from 'react';

const CorsMessage = () => {
  return (
    <p className="cors-message">
      Oops! The development plan from{' '}
      <a href="https://newsapi.org/" className="news-api" target="_blank" rel="noopener noreferrer">
        NewsAPI.org
      </a>{' '}
      is now only CORS enabled for localhost, so if you’d like to see this app in full you’ll need
      to run the{' '}
      <a
        href="https://github.com/TobiasNorton/in-the-news"
        className="news-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        repo
      </a>{' '}
      locally. Have a great day!
    </p>
  );
};

export default CorsMessage;
