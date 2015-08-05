<img src="http://cdn.trixel.io/trixels/593.svg" alt="Oh Ren!" width="200" style="width: 200px;"/>

Stimpy
======
A simple yet inventive fellow for making hapi things.

Stimpy exists because a) we love [hapi.js](http://hapijs.com) and b) because we host a [weekly hack night](http://hackportland.org) where folks are always looking for ways to quickly build and publicly demo little web apps.  The package manager and deploy function in [Meteor](http://meteor.com) is awesome, but comes with too much baggage.  So Stimpy gives us just what we want for web inventions: a simple starting place, packages via npm or [bower](http://bower.io), and a one line deploy to a free public demo via [heroku](http://heroku.com).  *All in 5 minutes or less* - or your money back.  We'd love to hear from you if you use Stimpy for your next hack - tweet us up at [@bigroomstudios](https://twitter.com/bigroomstudios)!

You'll need to have installed [node](http://nodejs.org/), a [heroku login](https://signup.heroku.com/dc) and the [heroku toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

To install stimpy:
```bash
$ npm install -g stimpy bower gulp
```
(You might need to sudo that depending on your system)

To create a starter app:
```bash
$ stimpy create medium my-new-app
$ cd my-new-app
$ stimpy start
```

This installs and runs a copy of the [stimpy-medium](https://github.com/semateos/stimpy-medium) boilerplate.

To test deploy:
```bash
$ stimpy deploy heroku
```

You'll want to point the git origin to your own repo:
```bash
$ git remote set-url origin git@github.com:yourgituser/your-app.git
```

After you make changes, you'll have to commit it to master before deploying:
```bash
$ git commit -am "made some awesome changes"
$ stimpy deploy heroku
```

## Stimpy Flavors
Stimpy comes in several delicious flavors:

*[Lite](https://github.com/semateos/stimpy-lite)* for even less:
```bash
$ stimpy create lite my-new-app
```
*[Medium](https://github.com/semateos/stimpy-medium)* for a little refinement:
```bash
$ stimpy create medium my-new-app
```
*[API](https://github.com/semateos/stimpy-api)* for the back end only:
```bash
$ stimpy create api my-new-app
```
*[Mobile](https://github.com/semateos/stimpy-mobile)* for a mobile / web hybrid crocostimpy:
```bash
$ stimpy create mobile my-new-app
```
*[Polymer](https://github.com/semateos/stimpy-polymer)* for hapi / polymer comboface:
```bash
$ stimpy create polymer my-new-app
```

### To-do
- Use Yeoman instead of git for boilerplates / generators
- Support custom deploy locations
- Plug-ins / recipes for popular PaaS' (e.g. nodejitsu)
- Deploy rollback option

### Contributors

 - [Sam Mateosian](https://github.com/semateos)
 - [Devin Ivy](https://github.com/devinivy)
 - [Max Felker](https://github.com/maxatbrs)

### Art
Trixel Stimpy thanks to [Supernannerpuss](http://trixel.io/#feed:supernannerpuss)

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
