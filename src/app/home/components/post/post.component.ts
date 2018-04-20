import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../shared/services/post.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  size: number = 140;
  user: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private snackbar: MatSnackBar) {
  		this.user = JSON.parse(localStorage.getItem('user'))
   }

  changeCount(){
  	this.size = 140 - this.form.value.tweet.length;
  }

  ngOnInit() {
  	this.form = this.fb.group({
  		tweet: [null, Validators.maxLength(140)]
  	})
  }

  onSubmit() {
  	if(this.form.valid){

  		this.postService.save({text : this.form.value.tweet, likes : 0, realname : this.user.realname, data : "10/10/10" }, this.user.id).then(res => {
        this.size = 140;
        this.snackbar.open('Tweet enviado', 'OK', {
          duration: 3000
        });
}).catch(err => {
  this.snackbar.open('Houve um erro', 'OK', {
    duration: 3000
  });
})

  		this.form.reset()

  	}
  }

}
