import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})

class List {
    //recebe dados de um componente pai
    @Input() titleList = 'Tarefas';

    //recebe dados de um componente pai
    @Input() dataList = ['Teste1', 'Teste2', 'Teste3'];
}

export { List }