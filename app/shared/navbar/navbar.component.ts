import { Component } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'dr-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
    dropdown: boolean = false;
    item: string = "";
    msgs: Message[] = [];

    isActivate(event): void {
        let itemText = event.target.text;
        this.msgs.push({
          severity: 'info',
          summary: 'Confirmation message',
          detail: itemText + ' has been activated!'
        });
        this.dropdown = false;
    }

    isOpen(): void {
        this.dropdown = !this.dropdown;
    }

}
