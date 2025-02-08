import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    getData(dataName: string) {
        return this.http.get(dataName);
    }
}