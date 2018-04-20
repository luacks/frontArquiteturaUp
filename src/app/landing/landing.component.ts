import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	register: boolean = false

  constructor(private router: Router) { 
  	if(this.router.url === '/register') this.register = true
  }

  ngOnInit() {
  }

}
