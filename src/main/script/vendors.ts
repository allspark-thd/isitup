// Prefer CoreJS over the polyfills above
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

// Typescript emit helpers polyfill
import 'ts-helpers';

// Angular 2
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Angular 2 Material 2
import '@angular2-material/button';
import '@angular2-material/card';
import '@angular2-material/checkbox';
import '@angular2-material/sidenav';
import '@angular2-material/input';
import '@angular2-material/list';
import '@angular2-material/radio';
import '@angular2-material/progress-bar';
import '@angular2-material/progress-circle';
import '@angular2-material/toolbar';