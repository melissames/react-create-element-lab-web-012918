import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('div', { className:'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: 'my-interests'},
      [
        React.createElement('li', {}, 'Javascript'),
        React.createElement('li', {}, 'Yoga'),
        React.createElement('li', {}, 'Art'),
        React.createElement('li', {}, 'Music')
      ]
    )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);
