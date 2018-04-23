import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  following: any = [];
  user: any;
  tweets: any = [];

  constructor(private postService: PostService, 
              private userService: UserService) {

      this.user = JSON.parse(localStorage.getItem('user'))
      this.load()
  }

  load(){
    this.loadApi().then(data => {
      this.sorting();
    }).catch(error => {
      console.log(error)
    });
  }

  //sorting posts by id
  sorting(){
    this.tweets = this.tweets.sort((a, b) => a.id - b.id).reverse()
  }

  // add new post to home page
  newTweet(data){
    this.tweets.push({ text: data.text, id: data.id, likes: 0, owner : { id: this.user.id, realname : this.user.realname }})
    this.sorting()
  }

  // delete post to home page
  deleteTweet(event){
    let tweet =  this.tweets.find(tweet => tweet.id === event.id)
    let index = this.tweets.indexOf(tweet)
    this.tweets.splice(index, 1)
  }

  async loadApi(){
    try{
      let result = await this.userService.following(this.user.id) // [arr] OR 'NADA'

      if(typeof result === 'string') this.following = [this.user]
        else {
          this.following = result
          this.following.push(this.user)
        }

      let followingArr = this.following.map(c => c.id)
      this.tweets = await this.postService.feed(followingArr)
    }catch(err){
      console.log(err)
    }
  }



  ngOnInit() {
  }

}
