import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  board:string;
  ngOnInit() {
    this.userService.getTestBoard().subscribe(
      data=>{
        this.board=data;
      },
      error=>{
        console.log("Error: ",error)
      }
    );
  }

}
