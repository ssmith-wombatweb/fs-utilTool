exports.debug = (title, obj) => {
  const colors = require('colors'); // Colors package to style the message.

  const border = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'; // Message border.
  const time = new Date(); // Current Date.
  const theme = { // Color themes.
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
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
      case 'delete': // Delete, output to the error console.
        console.error(output);
        break;
      default: // Otherwise output to the regular console.
        console.log(output);
        break;
    }
  }
};

exports.updateVersion = (current, release) => { // A function to semantically update the version number.
  const v = current.split('.'); // Split the version number apart at the .
  let num; // Variable for use in incrementing.

  if (v.length === 3) { // If there are 3 numbers in the version.
    switch (release) {
      case 'major': // If the release is major.
        num = parseInt(v[0], 10) + 1; // Add 1 to the major release.
        return `${num}.0.0`; // Return the major release number with the minor and patch reset.
      case 'minor': // If the release is minor.
        num = parseInt(v[1], 10) + 1; // Add 1 to the minor release.
        return `${v[0]}.${num}.0`; // Return the minor release number with the patch reset.
      case 'patch': // If the release is a patch.
        num = parseInt(v[2], 10) + 1; // Add 1 to the patch release.
        return `${v[0]}.${v[1]}.${num}`; // Return the updated version.
      default:
        return 'Invalid release type.'; // If the release is not one of the above, return the error.
    }
  }

  return 'Invalid version number.'; // If the version number does not contain precisely 3 numbers return the error.
};
