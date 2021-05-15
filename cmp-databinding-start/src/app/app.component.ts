import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Pramod Server', content: 'This is a Test Server'},
  {type: 'blueprint', name: 'Pramod Blue Print', content: 'This is a Blue Print'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    console.log("onServerAdded called");
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    console.log("onBlueprintAdded called");
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst()
  {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst()
  {
    this.serverElements.splice(0,1);
  }  



}
