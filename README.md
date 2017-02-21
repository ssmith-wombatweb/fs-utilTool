# Install
```
npm install utiltool
```

## Log Tool
utiltool uses colors
```
colors.setTheme({
  create: 'green',
  read: 'yellow',
  update: 'magenta',
  delete: 'red',
  error: 'red',
});
```

### Output

#### Example
```
utiltool.debug('Example'.create);

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
it will print Example in Green
Sun Feb 19 2017 15:27:09 GMT-0500 (EST)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```

## Using the Version Increaser
### `.updateVersion(current, release)`
By accessing the method above you can receive a semantically incremented version number. The version options and their results are below.

#### `.updateVersion('1.2.3', 'major')`
This will return `2.0.0`. It increments the major version and resets the minor and patch to zero.

#### `.updateVersion('1.2.3', 'minor')`
This will return `1.3.0`. It increments the minor version and resets the patch to zero.

#### `.updateVersion('1.2.3', 'patch'')`
This will return `1.2.4`. It increments the patch version.

An invalid version number will return `Invalid version number.` and an invalid release type will return `Invalid release type.`.

## Unit Testing
Run `mocha` in the root directory to run the unit test. To test coverage run `istanbul cover _mocha`.