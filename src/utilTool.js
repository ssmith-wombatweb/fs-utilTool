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
