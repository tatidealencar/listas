import { Component } from "@angular/core";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})

class Tasks {
    titleButton = "Salvar";
    titleButtonList = "Limpar";
    task = "";
    allTasks: Array<string> = [];

    /* o método handleTask recebe um evento disparado, 
    obtém o elemento HTML associado a ele e obtém seu valor */
    handleTask(event: Event) {
        /* esse valor é atribuído à variável task que é um atributo do componente Tasks */
        this.task = (event.target as HTMLInputElement).value;
    }

    /*o método save recebe um evento disparado, cancela o evento 
    e adiciona o valor contido no atributo task ao array allTasks */
    save(event: Event) {
        event.preventDefault(); //cancela o evento disparado
        if (this.task != "") {
            this.allTasks.push(this.task);
        }

    }

    //o método clear, quando chamado, limpa o array allTasks
    clear() {
        this.allTasks = [];
    }
}

export { Tasks }