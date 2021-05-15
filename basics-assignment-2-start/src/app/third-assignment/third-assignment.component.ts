import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {

  displayToggle = false;
  clickCounts: any[] = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setDisplayToggle()
  {
    this.counter++;
    //this.clickCounts.push(this.counter);
    this.clickCounts.push(new Date());
    this.displayToggle = !this.displayToggle;
    console.log("Counter Value: ", this.counter);
  }

  getColor(click)
  {
    return click >= 5 ? 'blue' : 'white' ;
  }

}
