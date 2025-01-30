import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from "../../buttons/button/button.component";

@Component({
  selector: 'app-layout',
  imports: [ButtonComponent],
  template: `
    <div class="layout">
      @for (item of list; track item; let i = $index) {
        <app-button [label]="list[$index]" (btnClickEmit)="btnClickFn($event)"></app-button>
      }
    </div>
  `,
  styles: `
  .layout {
    border: 1px solid black;
    margin: 10px;
    height: 265px; 
    background: #fff
  }
  `
})
export class LayoutComponent {
    list = ["7", "8" , "9", "/", "4" , "5",
      "6", "x", "1", "2", "3", "-", "C", "0", "=",
      "+"
    ];
    @Output() valueClickEmit = new EventEmitter<string>();

    btnClickFn(value: string) {
      this.valueClickEmit.emit(value);
    }
}
