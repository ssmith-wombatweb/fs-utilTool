exports.debug = (title, obj) => {
  const colors = require('colors');
  const fs = require('fs');

  const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  const theme = {
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
    error: 'red',
  };
  colors.setTheme(theme);

  let level;

  Object.keys(theme).forEach((key) => {
    const color = theme[key];
    const colorCode = colors.styles[color].open;

    const colorCodeArr = colorCode.split('');
    colorCodeArr.splice(0, 1);

    const titleArr = title.split('');
    titleArr.splice(0, 1);
    titleArr.splice(4);

    if (colorCodeArr.toString() === titleArr.toString()) {
      level = key;
    }
  });

  console.log(level);

  const output = border + title + JSON.stringify(obj) + '\n' + time + border;

  if (process.env.DEBUG) {
    console.log(output);
  }
};
