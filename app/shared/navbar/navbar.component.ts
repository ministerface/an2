import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dr-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  dropdown: boolean = false;
  display: boolean = false;
  item: string = "";
  isActivate(event): void {
    this.item = event.target.text;
    this.display = true;
  }

  isOpen(): void {
    this.dropdown = !this.dropdown;
  }

}
