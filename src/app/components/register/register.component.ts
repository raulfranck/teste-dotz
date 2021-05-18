import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  request: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.request = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [null, [Validators.required]],
      passwordConfirm: [null, [Validators.required]],
      dotz: [null, [Validators.required]],
      cart: [[]],
    })
  }

  onSubmit() {
    if(this.request.valid) {
      this.userService.createUser(this.request.value).subscribe(res => {})
      if (this.request.value.password === this.request.value.passwordConfirm) {
        window.alert('usuario cadastrado')
        this.router.navigate(['login'])
      } else {
        window.alert('As senhas devem corresponder')
      }
    } else {
      window.alert('Preencha todos os campos')
    }
  }

}
