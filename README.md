# beautylog
beautiful logging, TypeScript ready

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/beautylog)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/beautylog)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/beautylog)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/beautylog/)

## Status for master
[![build status](https://GitLab.com/pushrocks/beautylog/badges/master/build.svg)](https://GitLab.com/pushrocks/beautylog/commits/master)
[![coverage report](https://GitLab.com/pushrocks/beautylog/badges/master/coverage.svg)](https://GitLab.com/pushrocks/beautylog/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/beautylog.svg)](https://www.npmjs.com/package/beautylog)
[![Dependency Status](https://david-dm.org/pushrocks/beautylog.svg)](https://david-dm.org/pushrocks/beautylog)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/beautylog/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/beautylog/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/beautylog/badges/code.svg)](https://www.bithound.io/github/pushrocks/beautylog)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

**Quick Demo:**
[![asciicast](https://asciinema.org/a/7w06e0n0ow2a1m2v1htbotru6.png)](https://asciinema.org/a/7w06e0n0ow2a1m2v1htbotru6)

```javascript
beautylog.log('some log message') // normal console log message
beautylog.info('some log message') // info console log message
beautylog.ok('some log message') // ok console log message
beautylog.warn('some log message') // warn console log message
beautylog.success('some success message') // success console log message
beautylog.error('some error message') // error console log message
```

### Ora Integration
beautylog wraps the excellent ora module from npm to better work with beautylog. In general that means that you can log persistent messages WHILE you are actually having an active Ora object. beautylog handles all the fuss for you.

```javascript
beautylog.ora.start('Hi, this is some text!', 'blue')
beautylog.info('some persistent text') //does not disturb ora
console.log('something') // even this works because console.log is monkeypatched by beautylog
beautylog.ora.text('some updated text') // switches the text
beautylog.ora.stop()
```

## Centralized remote logging
Beautylog makes it easy to have all your node applications log to a remote location.

```javascript
import { Loggly } from 'beautyremote'
let myLogglyRemote = new Loggly({
    token: 'my_super_long_token_here'
})
beautylog.registerRemote(myLogglyRemote)
```

> Note: Beautylog monkeypatches all console log methods.
There is no need to change anything in your code.
Everything that is getting logged to your console by node will get logged to a remote as well.

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
