import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  btnState: any = {
    follow: true,
    unfollow: false
  }
  
  user: any;
  loadState = false;


  profile: any = {
    id : null,
    followers : null,
    tweets : null
  }

  constructor(private postService: PostService, 
              private activated: ActivatedRoute,
              private userService: UserService,
              private snack: MatSnackBar) {

    this.profile.id = this.activated.snapshot.paramMap.get('id')
    this.user = JSON.parse(localStorage.getItem('user'))

    this.loadApi(this.profile.id)
                .then(data => {
                  if(this.isFollowed()) {
                    this.btnState.follow = false
                    this.btnState.unfollow = true
                  }
                  //same person
                  if(this.user.id === parseInt(this.profile.id)){
                    this.btnState.follow = false
                    this.btnState.unfollow = false
                  }
                })
  }


  follow(){
    try{
      this.userService.follow(this.profile.id, this.user)
      this.snack.open('Usuário seguido', 'OK', { duration: 1500 })
      this.btnState.follow = false,
      this.btnState.unfollow = true
      this.profile.followers.push(this.user)
    }catch(err){
      console.log(err)
    }
  }

  unfollow(){
    let id = this.profile.id
    try{
      this.userService.unfollow(this.user.id, { id })
      this.snack.open('Você deixou de seguir.', 'OK', { duration: 1500 })
      this.btnState.follow = true,
      this.btnState.unfollow = false
      this.profile.followers.splice(this.profile.followers.indexOf(this.user), 1)
    }catch(err){
      console.log(err)
    }
  }

  async loadApi(id: Number){
    try{
      this.profile.tweets = await this.postService.get(id);
      this.profile.followers = await this.userService.followers(id);
      this.profile.tweets = JSON.parse(this.profile.tweets._body) // load tweets
      this.profile.followers = JSON.parse(this.profile.followers._body) // load tweets
      this.loadState = true
    }catch(e){
      console.log(e)
    }
  }

  isFollowed(){
    let find = this.profile.followers.filter(current => current.id === this.user.id)
    console.log(this.profile.followers)
    if(find.length === 1) return true
              else if(find.length === 0) return false
              else return false
  }

  

  ngOnInit() {
    
  }

}
