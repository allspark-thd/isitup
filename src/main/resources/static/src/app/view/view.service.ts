import {Http, RequestOptions, RequestMethod, Request, Headers, Response} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class StoreFactory {
    headers:Headers;

    constructor(public http:Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", 'application/json');
    }

    list(url) {
        const options = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: this.headers,
        });

        return this.http.request(new Request(options))
            .map((res: Response) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            });
    }

    add(url,data) {
        const options = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });

        return this.http.request(new Request(options))
            .map((res: Response) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            });
    }

    update(url,data) {
        const options = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });

        return this.http.request(new Request(options))
            .map((res: Response) => {
                if (res) {
                    return [{ status: res.status, json: res.json() }]
                }
            });
    }
}

