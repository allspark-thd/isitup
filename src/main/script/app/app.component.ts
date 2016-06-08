import {Component} from '@angular/core';
import {AppState} from './app_state.service.ts';
import {StatusService} from './status.service.ts';


@Component({
    selector: 'app',
    moduleId: module.id,
    pipes: [],
    providers: [],
    directives: [],
    styles: [],
    template: require('./app.html')
})
export class App {
    onLoadWelcomeMessage:string = `Is It Up?`;
    appName:string;
    message:string;

    ngOnInit() {
        console.log(this.onLoadWelcomeMessage, `App state is ${this.appState.state}`);
    }

    constructor(public statusService:StatusService, public appState:AppState) {

    }

    get() {
        this.statusService.getStatus("appName")
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }


    clear() {
        this.statusService.clearStatus("appName")
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }

    set(event) {
        debugger;
        this.statusService.setStatus(this.appName, this.message)
            .subscribe(
                res => console.log(res),
                err => console.log(err)
            );
    }

}

