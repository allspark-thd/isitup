// require('es6-shim');
// require('core-js/es7/reflect');
//
// require('zone.js/dist/zone.js');
// require('zone.js/dist/long-stack-trace-zone.js');
// require('zone.js/dist/jasmine-patch.js');
//
// require('@angular/core');
// require('@angular/http');
// require('@angular/router');
//
// require('rxjs/add/operator/map');
// require('rxjs/operator/delay');
// require('rxjs/operator/mergeMap');
// require('rxjs/operator/switchMap');
//
// require('core-js');
//
// Error.stackTraceLimit = Infinity;
//
// var testing = require('@angular/core/testing');
// var browser = require('@angular/platform-browser/testing');
//
// testing.setBaseTestProoviders(
//     browser.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
//     browser.TEST_BROWSER_STATIC_APPLICATION_PROVIDERS);
//
// Object.assign(global, testing);
//
// var testContext = require.context('../../main/script/app', true, /\.spec\.ts/);
//
// function requireAll(requireContext) {
//     return requireContext.keys().map(requireContext);
// }
//
// var modules = requireAll(testContext);


Error.stackTraceLimit = Infinity;

require('core-js');

// Typescript emit helpers polyfill
require('ts-helpers');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');

// RxJS
require('rxjs/Rx');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
    browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

Object.assign(global, testing);

/*
 * Ok, this is kinda crazy. We can use the the context method on
 * require that webpack created in order to tell webpack
 * what files we actually want to require or import.
 * Below, context will be an function/object with file names as keys.
 * using that regex we are saying look in ./src/app and ./test then find
 * any file that ends with spec.js and get its path. By passing in true
 * we say do this recursively
 */
var testContext = require.context('../../main/script/app', true, /\.spec\.ts/);

/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

// requires and returns all modules that match
var modules = requireAll(testContext);