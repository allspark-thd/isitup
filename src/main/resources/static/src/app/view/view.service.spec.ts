import {StoreFactory} from './view.service.ts';

import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    ResponseOptions,
    Response
} from 'angular2/http';

import {MockBackend} from 'angular2/http/testing';

import {it, describe, expect, beforeEach} from 'angular2/testing';

import {Injector, provide} from 'angular2/core';

describe('StoreFactory', () => {
    'use strict';

    var service;
    var injector;
    var backend;

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            BaseRequestOptions,
            MockBackend,
            provide(
                Http,
                {
                    useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }),
            provide(
                StoreFactory,
                {
                    useFactory: function (http: Http) {
                        return new StoreFactory(http);
                    },
                    deps: [Http]
                }
            )
        ]);
        service = injector.get(StoreFactory);
        backend = injector.get(MockBackend);
    });

    afterEach(() => backend.verifyNoPendingRequests());

    describe('save()', () => {
        describe('success', () => {
            it('should return a result from the promise', () => {
                var response = "invalid";
                var path = "path";
                var key = 'key';
                var value = 'value';
                var valid_request = `{"db_username": "${key}","password": "${value}"}`;

                backend.connections.subscribe(c => {
                    expect(c.request.url).toEqual('http://tg23qo-prod.apigee.net/v1/v1/secret/' + path);
                    expect(c.request._body).toEqual(valid_request);
                    c.mockRespond(new Response(new ResponseOptions({statusText: '200'})));
                });
                
                service.save(path, key, value).subscribe(data => response = data);
            });
        });
    });
});

