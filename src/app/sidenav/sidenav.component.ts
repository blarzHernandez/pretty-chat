import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  users: {};
  constructor() { }
  
  ngOnInit() {
     this.users = [
       { name:"blarz"},
       { name:"Hernandez"},
       { name:"Hernandez"},
       { name:"Hernandez"}
       

      ];
  }


}
