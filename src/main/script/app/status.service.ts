import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class StatusService {
    url:string;

    constructor(public http:Http) {
        this.url = 'isitup.cfapps.io';
    }

    setStatus(appName, message) {
        return this.http.post(this.url + '/app',
            `{  "appName" : "${appName}",  "downMessage" : "${message}" }' `
            )
            .map((res) => {
                return res.json();
            })
    };

    getStatus(appName) {
        return this.http.get(this.url + '/app/search/findByAppName?name=' + appName)
            .map((res) => {
                return res.json();
            })
    }

    clearStatus(appName) {
        return this.http.delete(this.url + '/app')
            .map((res) => {
                return res.json();
            })
    }
}
