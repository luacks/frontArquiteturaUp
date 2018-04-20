import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  tweets: any

  constructor(private postService: PostService, private activated: ActivatedRoute) {
    this.loadApi()
  }


  async loadApi(){
    try{
      this.tweets = await this.postService.get(this.activated.snapshot.paramMap.get('id'));
      this.tweets = JSON.parse(this.tweets._body)
      console.log(this.tweets)
    }catch(e){
      console.log(e)
    }
  }

  ngOnInit() {
  }

}
