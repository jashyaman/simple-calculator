import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="square" (click)=btnClickFn()>
      {{label}}
    </button>
  `,
  styles: `
  .square {
    margin-left: 15px;
    margin-top:13px;
    height: 50px;
    width: 50px; 
    cursor: pointer;
    font-weight: 400;
  }
  `
})
export class ButtonComponent {

  @Input() label: string = '';
  @Output() btnClickEmit = new EventEmitter<string>();

  btnClickFn() {
    this.btnClickEmit.emit(this.label);
  }


}
