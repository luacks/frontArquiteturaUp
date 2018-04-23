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
  subpage: string = 'posts'

  profile: any = {
    id : null,
    followers : null,
    following : null,
    tweets : null
  }

  constructor(private postService: PostService, 
              private activated: ActivatedRoute,
              private userService: UserService,
              private snack: MatSnackBar) {

    this.profile.username = this.activated.snapshot.paramMap.get('id')
    this.user = JSON.parse(localStorage.getItem('user'))
               
    this.loadApi(this.profile.username)
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

  changePage(page){
    this.subpage = page
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

  async loadApi(username: String){
    try{
      this.profile = await this.userService.find(username)
      this.profile.followers = await this.userService.followers(this.profile.id); // load followers
      this.profile.following = await this.userService.following(this.profile.id)
      this.profile.tweets = await this.postService.get(this.profile.id); // load tweets 
      console.log(this.profile)
      this.loadState = true
    }catch(e){
      console.log(e)
    }
  }

  isFollowed(){
    let find = this.profile.followers.filter(current => current.id === this.user.id)
    if(find.length === 1) return true
              else if(find.length === 0) return false
              else return false
  }

  

  ngOnInit() {
    
  }

}
