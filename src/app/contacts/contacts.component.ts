import { Component } from "@angular/core";

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

class Contacts {
    titleButton = "Adicionar";
    titleButtonList = "Limpar";
    dataList = ['Contato1', 'Contato2', 'Contato3'];
    titleList = "Contatos";
}

export { Contacts }