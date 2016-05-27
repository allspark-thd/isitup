///<reference path="../../../../node_modules/angular2/typings/browser.d.ts"/>

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';

import {describe, expect, it, injectAsync, beforeEachProviders} from '@angular/core/testing';
import {provide, ReflectiveInjector} from '@angular/core';
import {StatusService} from './status.service';
import {AppState} from './app_state.service';
import {App} from './app.component';

class MockStatusService  {
    public get(name) {
        return(name);
    }
    public set(name, message) {
        return(name+message);
    }
    public clear(name) {
        return(name);
    }
}

class MockState {

}

describe('App Component', () => {

    var injector;
    var component;

    beforeEach(() => {
        injector = ReflectiveInjector.resolveAndCreate([
            provide(AppState, {useClass: MockState}),
            provide(StatusService, {useClass: MockStatusService}),
            provide(
                App,
                {
                    useFactory: function (statusService:StatusService, appState:AppState) {
                        return new App(statusService, appState);
                    },
                    deps: [StatusService, AppState]
                }
            )
        ]);
        component = injector.get(App);
    });

    beforeEachProviders(() => [
        provide(AppState, {useClass: MockState}),
        provide(StatusService, {useClass: MockStatusService})
    ]);

    it('math works', () => {
        expect(1).toEqual(1);
    });

    // it('should display page', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(App).then((componentFixture: ComponentFixture) => {
    //         const element = componentFixture.nativeElement;
    //         componentFixture.detectChanges();
    //         expect(element.querySelectorAll('appName').length).toBe(0);
    //         expect(element.querySelectorAll('message').length).toBe(0);
    //     });
    // }));

    // it('initialize user and password', () => {
    //     expect(component.username).toBe("pcf-space-id");
    //     expect(component.password).toBe("pcf-service-instance-id");
    // });
    //
    //
    // it('reset on failed login', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    //     return tcb.createAsync(Auth).then((componentFixture: ComponentFixture) => {
    //         const element = componentFixture.nativeElement;
    //         componentFixture.detectChanges();
    //         expect(element.querySelectorAll('username').length).toBe(0);
    //         expect(element.querySelectorAll('password').length).toBe(0);
    //     });
    // }));

});