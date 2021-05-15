import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counterOddElements = [];
  counterEvenElements = [];


  onCounterCreated( counterData : { counterValue: number })
  {
    if(counterData.counterValue % 2 === 0)
    {
    this.counterEvenElements.push(counterData);
    }
    else{
      this.counterOddElements.push(counterData);
    }
  }
}
