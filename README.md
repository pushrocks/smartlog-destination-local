# beautylog
beautiful logging, TypeScript ready

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/beautylog)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/beautylog)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/beautylog)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/beautylog/docs)
[![docs](https://push.rocks/assets/repo-button-api.svg)](https://pushrocks.gitlab.io/beautylog/api)

## Status for master
[![build status](https://gitlab.com/pushrocks/beautylog/badges/master/build.svg)](https://gitlab.com/pushrocks/beautylog/commits/master)
[![coverage report](https://gitlab.com/pushrocks/beautylog/badges/master/coverage.svg)](https://gitlab.com/pushrocks/beautylog/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/beautylog.svg)](https://david-dm.org/pushrocks/beautylog)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/beautylog/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/beautylog/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/beautylog/badges/code.svg)](https://www.bithound.io/github/pushrocks/beautylog)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)

## Usage

```typescript
import * as beautylog from 'beautylog'

beautylog.log('some log message') // normal console log message
beautylog.info('some log message') // info console log message
beautylog.ok('some log message') // ok console log message
beautylog.warn('some log message') // warn console log message
beautylog.success('some success message') // success console log message
beautylog.error('some error message') // error console log message
```

### Ora Integration
beautylog wraps the excellent ora module from npm to better work with beautylog. In general that means that you can log persistent messages WHILE you are actually having an active Ora object. beautylog handles all the fuss for you.

```typescript
beautylog.ora.start('Hi, this is some text!', 'blue')
beautylog.info('some persistent text') //does not disturb ora
console.log('something') // even this works because console.log is monkeypatched by beautylog
beautylog.ora.text('some updated text') // switches the text
beautylog.ora.stop()
```

## Centralized remote logging
Beautylog makes it easy to have all your node applications log to a remote location.

```typescript
import { Loggly } from 'beautyremote'
let myLogglyRemote = new Loggly({
    token: 'my_super_long_token_here'
})
beautylog.registerRemote(myLogglyRemote)
```

> Note: Beautylog monkeypatches all console log methods.
There is no need to change anything in your code.
Everything that is getting logged to your console by node will get logged to a remote as well.

For more information read the docs!

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
