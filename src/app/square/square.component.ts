import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-flat-button color="primary" *ngIf="value==null">{{value}}</button>
    <button mat-flat-button color="accent" *ngIf="value=='X'">{{value}}</button>
    <button mat-flat-button color="warn" *ngIf="value=='O'">{{value}}</button>
  `,
  styles: ['button{height: 100% ; width: 100% ; font-size: 5rem;}']

})
export class SquareComponent {

  @Input()
  value!: 'X' | 'O';

}
