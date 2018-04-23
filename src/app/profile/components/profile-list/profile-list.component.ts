import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input('user') user: any

  constructor() { }

  ngOnInit() {
  }

}
