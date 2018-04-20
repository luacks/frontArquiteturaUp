import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  error: boolean = false
  errorMessage: String = 'Erro interno no servidor'
  constructor(private fb: FormBuilder, private uS: UserService, private router: Router) { }

  ngOnInit() {

  	this.form = this.fb.group({
  		username: [null, [Validators.required]],
  		password: [null, Validators.required]
  	})
  }

  onSubmit(){
  		if(this.form.valid){
  				this.uS.login(this.form.value)
  						.then(result => {
  							if(result.status === 200){
  								localStorage.setItem('user', result._body)
  								this.router.navigate(['home'])
  							}else{
  								this.form.reset()
  								this.error = true
  								this.errorMessage = result._body	
  							}
  						})
  						.catch(error => { this.error = true })
  		}
  }
}
