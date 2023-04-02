import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root"
})

export class apicall{
    url = 'https://apihomes.herokuapp.com/sendMail';
    constructor(private http: HttpClient) {
        
    }
    sendMail(data:any) {
        return this.http.post(this.url,data)
    }
}