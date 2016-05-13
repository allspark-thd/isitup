export * from './app.component.ts';
export * from './app_state.service.ts';
export * from './status.service.ts';

import {AppState} from './app_state.service.ts';
import {StatusService} from './status.service.ts';
/*
 This is where you would add your custom application providers.
*/
export const APP_PROVIDERS = [
  AppState, StatusService
]
