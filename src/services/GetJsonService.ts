import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetJsonService {
    constructor(private http: HttpClient) {}

    async GetJson(fileName: string) {
        var json = null;
        var url = `http://xxx.xxx/${fileName}.json`;
        this.http.get(url).subscribe(obj => json = obj );

        return json;
    }

}