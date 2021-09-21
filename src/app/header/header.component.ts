import { Component } from "@angular/core";

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

class Header {
    title: String = 'Listas';
}

export { Header };

