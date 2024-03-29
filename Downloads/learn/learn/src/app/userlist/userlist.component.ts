import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users : Observable<User[]> | undefined;

  constructor(private _serive : UserService) { }

  ngOnInit(): void 
  {
    this.users = this._serive.getAllUsers();
  }

}