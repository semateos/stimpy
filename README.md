Stimpy
======
A simple yet inventive fellow for deploying hapi things.

I made Stimpy because a) I love [hapi.js](http://hapijs.com) and b) because I host a [weekly hack night](http://hackportland.org) where I'm always looking for ways to quickly build and publicly demo little web apps.  I loved the package manager and deploy function in [Meteor](http://meteor.com), but it comes with too much baggage.  So Stimpy gives me just what I want for web inventions: a simple starting place, packages via npm or [bower](http://bower.io), and a one line deploy to a free public demo via [heroku](http://heroku.com).  *All in 5 minutes or less* - or your money back.  I'd love to hear from you if you use Stimpy at your next hackathon - tweet me up at [@semateos](https://twitter.com/semateos)!

To install:
```bash
$ npm install -g stimpy supervisor bower gulp
```
(You might need to sudo that depending on your system)

To create a starter app:
```bash
$ stimpy create medium my-new-app
$ cd my-new-app
$ npm start
```

This installs and runs a copy of the [stimpy-medium](https://github.com/semateos/stimpy-medium) boilerplate.

To test deploy:
```bash
$ stimpy deploy heroku
```

This assumes you have [node](http://nodejs.org/), a [heroku login](https://signup.heroku.com/dc) and the [heroku toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

After you make changes, you'll have to commit them to master before deploying:
```bash
$ git commit -am "made some awesome changes"
$ stimpy deploy heroku
```

You'll probably want to point the git origin to something else eventually:
```bash
$ git remote set-url origin git@github.com:semateos/my-app.git
```

You might want to try the [lite edition](https://github.com/semateos/stimpy-lite) for even less:
```bash
$ stimpy create lite my-new-app
```

##To-do
- Use Yeoman instead of git for boilerplates / generators
- Support custom deploy locations
- Plug-ins / recipes for popular PaaS' (e.g. nodejitsu)
- Deploy rollback option
- Add some Stimpy art?

## Contributors

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