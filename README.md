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

#### Log Messages
The create, read and update messages will output to the standard log.

#### Error Messages
The delete and error messages will output to the standard error log.

## Unit Testing
Run `mocha` in the root directory to run the unit test. To test coverage run `istanbul cover _mocha`.