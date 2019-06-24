import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { error } from 'util';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private userService:UserService) { }
  board:string;
  ngOnInit() {
    this.userService.getOperatorBoard().subscribe(
      data=>{
        this.board=data;
      },
      error=>{
        console.log("Error: ",error);
      }
    );
  }
  
}
