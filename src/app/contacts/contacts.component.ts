import { Component, OnInit } from "@angular/core";
import { AppService } from "./contacts.service";

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class Contacts implements OnInit {
    titleButton = "Salvar";
    contact = {
        id: '',
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    };
    contactList: any;
    titleList = 'Contatos';

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.getContactList().subscribe((data: any) => this.contactList = data);
    }

    handleContact(event: Event) {
        this.contact.name = (event.target as HTMLInputElement).value;
        this.contact.id = '11';
    }

    save(event: Event) {
        event.preventDefault();
        this.appService.saveContact(this.contact).subscribe((data: any) =>
            this.contactList.push(data));

    }

    clear(event: Event) {
        let id = (event.target as HTMLLIElement).value;
        this.appService.deleteContact(id).subscribe((data: any) => this.contactList.splice(id, 1));
    }
}
