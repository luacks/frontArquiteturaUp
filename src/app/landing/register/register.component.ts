import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../services/user.service'

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
  			  private router: Router) { }

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
    	console.log(this.form.value)
    	this.userService.save(this.form.value)
    			.then(data => {
    				this.form.reset()
    				this.success = true
    			})
    			.catch(err => {
    				this.error = true
    				console.log(err)
    			})
    }
  }

}
