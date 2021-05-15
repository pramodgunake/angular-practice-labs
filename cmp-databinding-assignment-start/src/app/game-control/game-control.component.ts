import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [
  ]
})
export class GameControlComponent implements OnInit {
  @Output() counterCreated = new EventEmitter<{counterValue: number}>();
  counter : number;
  interval: any;
  constructor() {
    this.counter = 0;
   }

  ngOnInit(): void {
  }

  onGameStart() {

    this.interval = setInterval(() => {
      console.log(this.counter);
      this.counterCreated.emit({
        counterValue: this.counter
      });
      console.log("Emitted event with counter value" + this.counter);
      this.counter++;
    }, 1000);


  }

  onGameEnd() {
    if(this.interval)
    {
      clearInterval(this.interval);
      this.counter = 0;
    }

  }

}
