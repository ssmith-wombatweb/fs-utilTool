# Install
```
npm install utiltool
```
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

output

example
```
utiltool.debug('Example'.create);

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
it will print Example in Green
Sun Feb 19 2017 15:27:09 GMT-0500 (EST)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```

log messages
The create, read and update messages will output to the standard log.

error messages
The delete and error messages will output to the standard error log.
