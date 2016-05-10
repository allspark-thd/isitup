import {Component} from '@angular/core';
import {AppState} from './app_state.service.ts';
import {StatusService} from './status.service.ts';

@Component({
	selector: 'app',
	pipes: [],
	providers: [],
	directives: [],
	styles: [],
	template: `<form name="form" (submit)="set($event)" role="form">
    <div class="form-group">
        <label for="appName">Application Name</label>
        <input type="text" name="appName" id="appName" class="form-control" [(ngModel)]="appName" required/>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <input type="message" name="message" id="message" class="form-control" [(ngModel)]="message" required/>
    </div>
    <div class="form-actions">
        <button type="set" ng-disabled="form.$invalid" class="btn btn-danger">Set</button>
        <button type="clear" ng-disabled="form.$invalid" class="btn btn-danger">Clear</button>
        <button type="get" ng-disabled="form.$invalid" class="btn btn-danger">Get</button>
    </div>
</form>
`
})
export class App {
	onLoadWelcomeMessage: string = `Is It Up?`;

	ngOnInit() {
		console.log(this.onLoadWelcomeMessage, `App state is ${this.appState.state}`);
	}

    constructor(public statusService:StatusService, public appState: AppState) {

    }
    
    check() {
        this.statusService.getStatus("appName")
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }


    clear() {
        this.statusService.setStatus("appName", "message")
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }


    set() {
        this.statusService.clearStatus("appName")
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }

}
