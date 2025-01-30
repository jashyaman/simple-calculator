import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenComponent } from "./output/screen/screen.component";
import { LayoutComponent } from "./layout/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScreenComponent, LayoutComponent],
  template: `
    <div class="main">
      <div class="container">
        <app-screen [value]="valueFromButton"></app-screen>
        <app-layout (valueClickEmit)="collectValue($event)"></app-layout>
      </div>
    </div>
    <router-outlet />
  `,
  styles: [`
    .main {
      background-image: linear-gradient(red, red);
      width: 100vw;
      height: 100vh;
    }
    .container {
      position: absolute;
      width: 300px;
      height: 350px;
      border: 1px solid black;
      top: 25%;
      left:25%;
      border-radius:5%;
      background: #FFA756;
    }`],
})
export class AppComponent {
  title = 'simple-calculator';
  valueFromButton:string = '';
  collectValue(valueFromButton:string) {
    this.valueFromButton = valueFromButton;
  }
}
