# jonathanballands.me

© 2016 Jonathan Ballands

This is the repository for the personal website of Jonathan Ballands. Feel free
to use this repository for learning or for developing your own personal site.

## Installation

_Note: This guide assumes you are using [Node 4.3](https://nodejs.org/en/)._

1. Make sure Gulp is installed on your version of Node: `$ npm install -g gulp`
2. Install this project's dependencies: `$ npm install`

## Usage

My website uses a proprietary build mechanism using the [Gulp](http://gulpjs.com/)
build system. You can use the application in the following ways:

### gulp

`$ gulp`

Use this command to run the project in development mode. This is not appropriate
for production.

### gulp prepare

`$ gulp prepare -p {{configuration}}`

Prepares the application in a given configuration. Configurations are defined
in `configurations.json` and describe build-time and run-time constants for the
web application. For example, you could prepare the web application in its
Brutalmoose configuration with `$ gulp prepare -p brutalmoose`, and then run it
in that configuration with `$ node dist/server/index.js`.

### npm start

`$ npm start`

Invokes `./node_modules/.bin/gulp prepare -p production && node dist/server/index.js`.
Recommended for production builds.

## License

[GPLv3 License](http://www.gnu.org/licenses/gpl.html)
