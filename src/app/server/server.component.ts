import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  // serverId : number = 10;
  // serverStatus : string = "offline server";
  allowNewServer : boolean =  false;
  displayServerDetails : boolean =  false;
  newServerStatus : string = "No server created"
  newServerName : string = '';
  servers = ['Testserver', 'Testserver2'];
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;}, 2000);
  }

  ngOnInit() {
  }

  // getServerStatus() {
  //   return this.serverStatus;
  // }

  onCreateServer(){
    this.displayServerDetails = true;
    this.newServerStatus = "Server " + this.newServerName +" just created";
  }

  onUpdateServerName(event: any){
    console.log(event);
    // this.newServerName = event.target.value;
    // console.log(this.newServerName);
    // this.newServerName = (<HTMLInputElement>event.target).value;
    // console.log(this.newServerName);
  }
}
