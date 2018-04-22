import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {


  @Input('post') post
  @ViewChild('likeBtn') btnLike: any;
  user: any;
  deleteButton: boolean = false;
  @Output('onDeleted') deleteEmit: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private postService: PostService, 
    private snack: MatSnackBar) {
      this.user = JSON.parse(localStorage.getItem('user'))
  }

  delete(){
    let id = this.post.id

    try{
      this.postService.delete(id)
      this.snack.open('Postagem deletada', 'OK', {  duration : 1500 })
      this.deleteEmit.emit({ id })
    }catch(err){
      console.log(err)
    }
  }

  like(likes){
    this.post.likes += 1;
    this.postService.like(this.post.id, this.post.likes)
      .then(result => {
        this.btnLike.disabled = true;
        this.snack.open('Tweet curtido', 'OK', {
          duration: 1500
        })
      }).catch(err => {
        console.log(err)
      })
  }

  ngOnInit() {
    if(this.post.owner.id === this.user.id) {
      this.btnLike.disabled = true;
      this.deleteButton = true;
    }
  }

}
