import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    listContactUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getContactList() {
        return this.http.get(this.listContactUrl);
    }

    saveContact(contact: any) {
        console.log(contact);
        return this.http.post(this.listContactUrl, contact);
    }

    deleteContact(id: Number) {
        return this.http.delete(`${this.listContactUrl}/${id}`);
    }

    updateContact(id: Number, contact: any) {
        return this.http.put(`${this.listContactUrl}/${id}`, contact);
    }
}