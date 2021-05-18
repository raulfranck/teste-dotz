import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  /* private user: User = new User() */

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [null],
      password: [null]
    })
  }

  onSubmit() {
    this.userService.checkLogin(this.formLogin.value)
  }

}
