<h3 align="center">
  <a href="https://www.red5pro.com" target="_blank"><img src="assets/red5pro_logo.png" alt="Red5 Pro Logo" /></a>
</h3>
<p align="center">
  <a href="#requirements">requirements</a> &bull;
  <a href="#developer-quickstart">quickstart</a> &bull;
  <a href="#library-structure">library structure</a>
</p>
-------

# Contributing to Red5 Pro HTML SDK

> The following document describes how to contribute to Red5 Pro Stream Manager Extension library.

* [Requirements](#requirements)
* [Developer Quickstart](#developer-quickstart)
  * [Testing](#testing)
  * [Building](#building)
  * [Releasing](#releasing)
* [Tagging and Releases](#tagging-and-releases)
* [Library Structure](#library-structure)
  * [Babel Transpiler](#babel-transpiler)
  * [Webpack Builds](#webpack-builds)
  * [Jest Unit Tests](#jest-unit-tests)
  * [ESLint](#eslint)

---

# Requirements

Developing and build the **Red5 Pro Stream Manager Extension** library requires:

* [NodeJS](https://nodejs.org/en/)
* NPM (should be installed as part of Node)

_The Stream Manager Extension is actively being developed against Node 10+._

## Installation of Requirements

The *Stream Manager Extension* library was develop using [NodeJS v10](https://nodejs.org/en/blog/release/v10.0.0/), though - most likely - will be compatable with *NodeJS >= 8*.

The preferred *NodeJS* version manager is [n](https://github.com/tj/n); `n` makes it very easy to manage different versions of NodeJS for your development needs. Read and follow the instructions regarding [n on Github](https://github.com/tj/n). As a quick walk through to set up development for this project:

```sh
$ npm install -g n
$ n stable
```

# Developer Quickstart

## Installation

```sh
$ npm install
```

## Testing

To run the test suite:
```sh
$ npm run test
```

To watch for file change and run tests while updating test suite:
```sh
$ npm run test:watch
```

Optionally, if want to run/watch a target test suite:
```sh
$ npm run test:watch [path-to-test-file]
```

## Building

To build the library targeting the browser:

```sh
$ npm run webpack:build
```

Build is placed in the `build` directory with the current `version` defined in the [package.json](package.json).

## Staging

To build a minified version of the library without bumping the version:

```sh
$ npm run webpack:build-min
```

Build is placed in the `build` directory with the current `version` defined in the [package.json](package.json).

## Releasing

To build a release for public consumption:

```sh
$ npm run webpack:dist
```

Build is placed in the `dist` directory with the updated `version` defined in the [package.json](package.json).

### Versioning

By default, running `webpack:dist` will bump the `PATCH` digit of the semver (i.e., changing release `1.0.0` to `1.0.1`).

You can specify the version target when appropriate by defining a `BUMP` env variable when issuing `webpack:dist`. For instance, to build a release with an updated `MAJOR` version:

```sh
$ BUMP=major npm run webpack:dist
```

The follow excepted `BUMP` env variable values are:

* `major`
* `minor`
* `patch`

> More information about semantic versioning: [http://semver.org/](http://semver.org/).

# Tagging and Releases

The workflow in generating a release version in `develop` to be moved up the chain for CI deployment is as follows:

## Release Distribution

1. Develop all work off of `develop` branch
2. Continually PR work into `develop` branch
3. When `develop` has been QA'd and available for release, change the release semver in `package.json`
4. Issue the following command to update the changelog: `git pull && npm run changes`
5. Preview & edit the changelog as needed
6. Commit the changes into `develop` branch with the following command (replacing `$version` with the version in `package.json`): `$ git commit -m "$version"`
7. Issue the following command to make a distribution to be attached to tagged versions: `$ npm run webpack:dist`
8. The distribution will be in the `dist` directory under the version number you set in step #3
7. PR `develop` into `qa`, and tag a **$version-staging** version for CI
8. PR `qa` into `master, and tag a *v$version-release** version for CI
9. Add the zipped up distribution you created in step #8 to the tag(s)


# Library Structure

The library is composed of modules written in module syntax of [es2015](http://www.ecma-international.org/ecma-262/6.0/), transpiled using [Babel](https://babeljs.io/) and built using [Webpack](https://github.com/webpack/webpack) for browsers of today.

## Babel Transpiler

[Babel](https://babeljs.io/) is used as a transpiler. This allows for the library source to be written using new features from and syntax of [es2015](https://babeljs.io/docs/learn-es2015/), in the hope/attempt to remove the transpilation once "modern" browsers vendors adopt support for *es2015*.

## Webpack Builds

[Webpack](https://github.com/webpack/webpack) is used to build and deploy the *Red5 Pro Stream Manager Extension* library. It supports running the code through the [Babel](https://babeljs.io/) transpiler and minification through the [Uglify Plugin](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin).

You can find the *webpack* build configuration at [webpack.config.babel.js](webpack.config.babel.js).

## Jest Unit Tests

[Jest](https://facebook.github.io/jest/) is used for the testing framework. Essentially, it is [jasmine2](http://jasmine.github.io/2.0/introduction.html) with built in mocking and capability to write tests in using [es2015](http://www.ecma-international.org/ecma-262/6.0/) syntax and [babel](https://babeljs.io/).

## ESLint

[ESLint](http://eslint.org/) is used as a linting tool for code structure. The default [eslint:recommended](http://eslint.org/docs/user-guide/migrating-to-1.0.0) settings are defined as the base rule set.

To install *eslint* to be used in your preferred editor:

```sh
$ npm install -g eslint
```

[Please visit the documentation on proper integration with your preferred editor/IDE](http://eslint.org/docs/user-guide/integrations).
