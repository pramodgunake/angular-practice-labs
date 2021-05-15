import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  isUserNameEmpty()
  {
    //console.log("User Name Length: {} ",this.username.length);
    return this.username.length == 0;
  }

  onClickReset()
  {
    console.log("Rest User Name");
    this.username = '';
  }
}
