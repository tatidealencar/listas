import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'button-action',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})

class Button {
    
    // recebe dados de um componente pai
    @Input() titleButton = '';

    // envia o evento disparado para o componente pai com o nome de buttonEvent
    @Output('buttonEvent') actionToDispatch = new EventEmitter();
    
    action(click: Event) {
        this.actionToDispatch.emit(); //dispara um evento
    }
}

export { Button }