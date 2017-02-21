exports.debug = (title, obj) => {
  const colors = require('colors'); // Colors package to style the message.

  const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'; // Message border.
  const time = new Date(); // Current Date.
  const theme = { // Color themes.
    create: 'green',
    read: 'blue',
    update: 'magenta',
    delete: 'yellow',
    error: 'red',
  };
  colors.setTheme(theme); // Setup color themes.

  let level; // Let to hold level.

  Object.keys(theme).forEach((key) => { // For each theme.
    const color = theme[key]; // Grab the color.
    const colorCode = colors.styles[color].open; // Grab the color code from the colors library.

    const colorCodeArr = colorCode.split(''); // Split each character apart for the library color code.
    colorCodeArr.splice(0, 1); // Remove the console escape section from the beginning.

    const titleArr = title.split(''); // Split each character apart for the title.
    titleArr.splice(0, 1); // Remove the console escape section from the beginning.
    titleArr.splice(4); // Splice out the color code.

    if (colorCodeArr.toString() === titleArr.toString()) { // If the string of the two color code arrays match.
      level = key; // Set the key/level to level.
    }
  });

  const output = border + title + JSON.stringify(obj) + '\n' + time + border; // Concat the output.

  if (process.env.DEBUG) { // If debug is set.
    switch (level) { // If the level is...
      case 'error': // Error, output to the error console.
        console.error(output);
        break;
      case 'delete': // Delete, output to the warn console.
        console.warn(output);
        break;
      default: // Otherwise output to the regular console.
        console.log(output);
        break;
    }
  }
};
