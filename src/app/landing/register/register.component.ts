import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../../shared/services/user.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	form: FormGroup
	success: boolean = false
	error: boolean = false

  constructor(private fb: FormBuilder,
  			  private userService: UserService,
					private router: Router,
							private snack: MatSnackBar) { }

  ngOnInit() {

  	this.form = this.fb.group({
  		realname: [null, Validators.required],
  		username: [null, [Validators.required]],
  		email: [null, [Validators.required, Validators.email]],
  		password: [null, Validators.required]
  	})
  }

  onSubmit(){
    if(this.form.valid){
    	this.userService.save(this.form.value)
    			.then(data => {
						if(data.id){
							this.form.reset()
							this.success = true
						}else{
							this.snack.open('Não foi possivel registrar', 'OK', { duration : 2000 })
						}
    			})
    			.catch(err => {
    				this.error = true
    				console.log(err)
    			})
    }
  }

}
