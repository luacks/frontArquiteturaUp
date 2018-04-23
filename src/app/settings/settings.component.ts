import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: any;
  formUser: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              private snack: MatSnackBar) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  delete(){
    this.userService.delete(this.user)
      .then(result => {
        localStorage.removeItem('user')
        this.router.navigate(['/'])
      }).catch(err => {
        console.log(err)
      })
  }

  update(user){
    this.userService.update(user)
      .then(result => {
        localStorage.setItem('user', JSON.stringify(user))
      }).catch(err => {
        this.snack.open('Houve um erro ao deletar', 'OK', { duration : 2000 })
      })
  }

  updateSubmit(){
    let user = this.user;
    if(this.formUser.valid){
      user.realname = this.formUser.value.realname
      user.username = this.formUser.value.username
      user.email = this.formUser.value.email
      this.update(user)
    }else{
      this.snack.open('Erros no formulário', 'OK', { duration : 2000 })
    }
  }

  ngOnInit() {
    this.formUser = this.fb.group({
      username : [null, Validators.required],
      realname : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]]
    })
  }

}
