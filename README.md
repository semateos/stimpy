Stimpy
======
A simple yet inventive fellow for deploying hapi things.

To install:
```bash
$ npm install -g git://github.com/semateos/stimpy.git supervisor bower gulp
```
(You might need to sudo that depending on your system)

To create a starter app:
```bash
$ stimpy create medium my-new-app
$ cd my-new-app
$ npm start
```

This installs and runs a copy of [stimpy-medium](https://github.com/semateos/stimpy-medium).  You might want to try the [lite edition](https://github.com/semateos/stimpy-lite) for even less:
```bash
$ stimpy create lite my-new-app
```

To test deploy:
```bash
$ stimpy deploy heroku
```

This assumes you have [node](http://nodejs.org/), a [heroku login](https://signup.heroku.com/dc) and the [heroku toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

You'll want to repoint the git origin to something else eventually:
```bash
$ git remote set-url origin git@github.com:semateos/my-app.git
```

## Contributers

[Sam Mateosian](https://github.com/semateos)

#### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.