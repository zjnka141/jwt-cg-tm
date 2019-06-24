import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService) { }
  board:string;
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data=>{
        this.board=data;
      },
      error=>{
        console.log(error);
        this.board="Sorry, You don't have role to access this board!"
      }
    );
  }

}
