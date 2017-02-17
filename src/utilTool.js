exports.debug = (title, obj) => {
  const colors = require('colors');
  const fs = require('fs');

  const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  colors.setTheme({
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
    error: 'red',
  });
  const output = border + title + JSON.stringify(obj) + '\n' + time + border;

  if (process.env.DEBUG) {
    console.log(output);
  }
};
