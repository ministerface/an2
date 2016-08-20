import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dr-userbar',
  templateUrl: 'userbar.component.html'
})
export class UserbarComponent {
  constructor (@Inject('Window') window: Window) {}

  display: boolean = false;
  draggable: boolean = false;

  closeTab(): void{
    window.close();
  }

  getWindow(event): void {
    event.preventDefault();
    this.display = true;
  }

}
