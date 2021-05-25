/* tslint:disable:no-trailing-whitespace */
import {Component, Injectable, OnInit} from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {Account} from '../../Model/Account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  user: Account = new Account(null, '', '', '');
  confPassword: "";

  createAccount(user: Account , confPass: string){
    console.log(user);
    if (user.password === confPass){
      this.userService.createAccount(user).subscribe(value => {
        this.user = user;
      });
    }else{
      alert("passwords doesnt equal");
    }
  }

  ngOnInit(): void {
  }

}
