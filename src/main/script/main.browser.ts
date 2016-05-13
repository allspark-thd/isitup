import {bootstrap} from '@angular/platform-browser-dynamic';
import {DIRECTIVES, PIPES, PROVIDERS, ENV_PROVIDERS, NG_APPLICATION_PROVIDERS} from './platform/browser';
import {App, APP_PROVIDERS} from './app';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(App, [
	...PROVIDERS,
	...ENV_PROVIDERS,
	...DIRECTIVES,
	...PIPES,
	...APP_PROVIDERS,
	...NG_APPLICATION_PROVIDERS,
    ...HTTP_PROVIDERS
]).catch(() => {debugger})