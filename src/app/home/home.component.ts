import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  following: any;
  user: any;
  tweets: any;

  constructor(private postService: PostService, private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.loadApi()
  }


  async loadApi(){
    try{
      this.following = await this.userService.following(this.user.id);
      this.following = JSON.parse(this.following._body)
      this.following.push(this.user)
      this.following = this.following.map(c => c.id)

      this.tweets = await this.postService.feed(this.following)
      this.tweets = JSON.parse(this.tweets._body)
      
    }catch(err){
      console.log(err)
    }
  }

  ngOnInit() {
  }

}
