import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-screen',
  imports: [],
  template: `
    <div class="screen">
    {{screenText}}
    </div>
  `,
  styles: `
    .screen {
      border: 1px solid black;
      margin: 10px;
      height: 50px;
      background:rgb(15, 20, 16);
      font-size: 40px;
      padding-left:10px;
      color: white;
    }

  `
})
export class ScreenComponent implements OnChanges  {

  @Input() value: string = '';
  screenText: string = '';
  resultPublished: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']) {
      this.handleNewInput(changes['value'].currentValue);
    }
  }

  handleNewInput(val: string) {
      if(val === '=') {
        let evalExpr = this.screenText.replaceAll('x', '*');
        let result = '';
        try {
          result = math.evaluate(evalExpr);
          if(result === undefined || Number.isNaN(result)) {
            result = '0';
          }
          this.screenText = result+"";
          this.resultPublished = true;
        } catch(err) {
          // console.log(err);
        }
      } else if(val === 'C') {
        this.screenText = '';
        this.resultPublished = false;
      } else {
        if(this.resultPublished) {
          this.screenText = '';
          this.resultPublished = false;
        }
        this.screenText=this.screenText+val;
      }
  }

}
