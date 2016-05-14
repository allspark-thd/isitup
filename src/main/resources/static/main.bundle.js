webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(281);
	var browser_1 = __webpack_require__(348);
	var app_1 = __webpack_require__(347);
	platform_browser_dynamic_1.bootstrap(app_1.App, browser_1.PROVIDERS.concat(browser_1.ENV_PROVIDERS, browser_1.DIRECTIVES, browser_1.PIPES, app_1.APP_PROVIDERS)).catch(function (err) { return console.error(err); });


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* Thanks from @AngularClass */
	var core_1 = __webpack_require__(1);
	var AppState = (function () {
	    function AppState() {
	        this._state = {};
	    }
	    Object.defineProperty(AppState.prototype, "state", {
	        // already return a clone of the current state
	        get: function () {
	            return this._state = this._clone(this._state);
	        },
	        // never allow mutation
	        set: function (value) {
	            throw new Error('do not mutate the `.state` directly');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppState.prototype.get = function (prop) {
	        // use our state getter for the clone
	        var state = this.state;
	        return state[prop] || state;
	    };
	    AppState.prototype.set = function (prop, value) {
	        return this._state[prop] = value;
	    };
	    AppState.prototype._clone = function (object) {
	        return JSON.parse(JSON.stringify(object));
	    };
	    AppState = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppState);
	    return AppState;
	}());
	exports.AppState = AppState;


/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(175);
	var core_1 = __webpack_require__(1);
	var StatusService = (function () {
	    function StatusService(http) {
	        this.http = http;
	        this.url = 'isitup.cfapps.io';
	    }
	    StatusService.prototype.setStatus = function (appName, message) {
	        return this.http.post(this.url + '/app', "{  \"appName\" : \"" + appName + "\",  \"downMessage\" : \"" + message + "\" }' ")
	            .map(function (res) {
	            return res.json();
	        });
	    };
	    ;
	    StatusService.prototype.getStatus = function (appName) {
	        return this.http.get(this.url + '/app/search/findByAppName?name=' + appName)
	            .map(function (res) {
	            return res.json();
	        });
	    };
	    StatusService.prototype.clearStatus = function (appName) {
	        return this.http.delete(this.url + '/app')
	            .map(function (res) {
	            return res.json();
	        });
	    };
	    StatusService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], StatusService);
	    return StatusService;
	}());
	exports.StatusService = StatusService;


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_state_service_ts_1 = __webpack_require__(131);
	var status_service_ts_1 = __webpack_require__(132);
	var App = (function () {
	    function App(statusService, appState) {
	        this.statusService = statusService;
	        this.appState = appState;
	        this.onLoadWelcomeMessage = "Is It Up?";
	    }
	    App.prototype.ngOnInit = function () {
	        console.log(this.onLoadWelcomeMessage, "App state is " + this.appState.state);
	    };
	    App.prototype.check = function () {
	        this.statusService.getStatus("appName")
	            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
	    };
	    App.prototype.clear = function () {
	        this.statusService.setStatus("appName", "message")
	            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
	    };
	    App.prototype.set = function () {
	        this.statusService.clearStatus("appName")
	            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            moduleId: module.id,
	            pipes: [],
	            providers: [],
	            directives: [],
	            styles: [],
	            template: __webpack_require__(349)
	        }), 
	        __metadata('design:paramtypes', [status_service_ts_1.StatusService, app_state_service_ts_1.AppState])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(346));
	__export(__webpack_require__(131));
	__export(__webpack_require__(132));
	var app_state_service_ts_2 = __webpack_require__(131);
	var status_service_ts_2 = __webpack_require__(132);
	/*
	 This is where you would add your custom application providers.
	*/
	exports.APP_PROVIDERS = [
	    app_state_service_ts_2.AppState, status_service_ts_2.StatusService
	];


/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(296);
	var common_1 = __webpack_require__(35);
	var http_1 = __webpack_require__(175);
	var platform_browser_1 = __webpack_require__(182);
	var common_2 = __webpack_require__(35);
	var button_1 = __webpack_require__(302);
	var card_1 = __webpack_require__(303);
	var checkbox_1 = __webpack_require__(304);
	var sidenav_1 = __webpack_require__(311);
	var input_1 = __webpack_require__(305);
	var list_1 = __webpack_require__(306);
	var radio_1 = __webpack_require__(309);
	var progress_bar_1 = __webpack_require__(307);
	var progress_circle_1 = __webpack_require__(308);
	var toolbar_1 = __webpack_require__(312);
	exports.MATERIAL_DIRECTIVES = sidenav_1.MD_SIDENAV_DIRECTIVES.concat([
	    button_1.MdAnchor,
	    button_1.MdButton,
	    toolbar_1.MdToolbar,
	    checkbox_1.MdCheckbox,
	    radio_1.MdRadioButton,
	    radio_1.MdRadioGroup,
	    progress_circle_1.MdSpinner,
	    progress_bar_1.MdProgressBar,
	    progress_circle_1.MdProgressCircle
	], input_1.MD_INPUT_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, card_1.MD_CARD_DIRECTIVES);
	exports.MATERIAL_PROVIDERS = [
	    radio_1.MdRadioDispatcher
	];
	/*
	  Add custom env providers here.
	*/
	exports.ENVIRONMENT_PROVIDERS = platform_browser_1.ELEMENT_PROBE_PROVIDERS.slice();
	/*
	  Add custom _angular2_ providers here.
	*/
	exports.NG_APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS, router_1.ROUTER_PROVIDERS, exports.MATERIAL_PROVIDERS, [
	    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy })
	]);
	/*
	  Add your custom pipes here.
	*/
	exports.APPLICATION_PIPES = [];
	/*
	  Add your custom directives here to be use anywhere.
	*/
	exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.concat(exports.MATERIAL_DIRECTIVES);
	/*
	  These are the 3 exported constants we will add to our bootstrap in our main file.
	*/
	exports.ENV_PROVIDERS = exports.ENVIRONMENT_PROVIDERS.slice();
	exports.PROVIDERS = exports.NG_APPLICATION_PROVIDERS.slice();
	exports.PIPES = [
	    core_1.provide(core_1.PLATFORM_PIPES, { multi: true, useValue: exports.APPLICATION_PIPES })
	];
	exports.DIRECTIVES = [
	    core_1.provide(core_1.PLATFORM_DIRECTIVES, { multi: true, useValue: exports.APPLICATION_DIRECTIVES })
	];


/***/ },

/***/ 349:
/***/ function(module, exports) {

	module.exports = "<md-card>\n    <md-card-content>\n        <span x-large>Managing to Keep It Up?</span>\n        <form name=\"form\" (submit)=\"set($event)\" role=\"form\">\n            <md-card>\n                <div class=\"form-group\">\n                    <md-input placeholder=\"Application\" type=\"text\" name=\"appName\" id=\"appName\" class=\"form-control\"\n                              [(ngModel)]=\"appName\" required>\n                        <md-hint align=\"end\">Name of Application</md-hint>\n                    </md-input>\n                </div>\n                <div class=\"form-group\">\n                    <md-input placeholder=\"Notification\" type=\"text\" name=\"message\" id=\"message\"\n                              class=\"form-control\"\n                              [(ngModel)]=\"message\" required>\n                        <md-hint align=\"end\">Notification for Users</md-hint>\n                    </md-input>\n                </div>\n            </md-card>\n            <md-card>\n                <div class=\"form-actions\">\n                    <button md-raised-button color=\"primary\" type=\"set\" ng-disabled=\"form.$invalid\">Set</button>\n                    <button md-raised-button color=\"accent\" type=\"clear\" ng-disabled=\"form.$invalid\">Clear</button>\n                    <button md-raised-button color=\"warn\" type=\"get\" ng-disabled=\"form.$invalid\">Get</button>\n                </div>\n            </md-card>\n        </form>\n        <md-card>\n            Card Content\n            <pre>Can go here</pre>\n        </md-card>\n\n    </md-card-content>\n</md-card>"

/***/ }

});