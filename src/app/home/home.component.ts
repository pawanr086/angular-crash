import { Component, OnInit } from '@angular/core';   
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // h1Style: boolean = false;
  users: Object;

  constructor(private data: DataService) { }

  //ngOnInit - is in Angular Life cycle hook - it executes when the component loads up
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    })
  }

  // firstClick(){
    // console.log("btn clicked");
    // this.h1Style = true;

    //calling the service - Dataservice
  //   this.data.firstClick();
  // }
}
