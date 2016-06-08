import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class StatusService {
    url:string;
    headers:Headers;
    options:RequestOptions;



    constructor(public http:Http) {
        this.headers = new Headers({'content-type':'application/json'});
        this.options = new RequestOptions({headers:this.headers});
    }





    setStatus(appName, downMessage) {
        debugger;
        return this.http.post('/app', JSON.stringify({appName:appName, downMessage:downMessage}), this.options)
            .map((res) => {
                return res.json();
            })
    };

    getStatus(appName) {
        return this.http.get('/app/search/findByAppName?name=' + appName)
            .map((res) => {
                return res.json();
            })
    }

    clearStatus(appName) {
        return this.http.delete('/app')
            .map((res) => {
                return res.json();
            })
    }
}
