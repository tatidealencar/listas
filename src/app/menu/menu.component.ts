import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';

type ItemsMenu = {
    name: string,
    url: string,
}

@Component({
    selector: 'main-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

class Menu {
    menu: Array<ItemsMenu> = [
        { name: 'Tarefas', url: '/tasks' },
        { name: 'Contatos', url: '/contacts' },
    ];
    isSelected: string = ''; //guarda qual é a página ativa

    //Router dispara evento quando chega ao caminho de destino (NavigationEnd)
    //filter() verifica se evento disparado corresponde ao NavigationEnd
    //subscribe() listener
    constructor(private router: Router) {
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd) 
        ).subscribe((e: NavigationEnd) => this.isSelected = e.url)
    }
}

export { Menu }