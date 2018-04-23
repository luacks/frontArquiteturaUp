import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	logged: boolean = true;
  user: any = null;
  profile: boolean = true;
  backState: boolean = false;

  constructor(private router: Router,
              private activated: ActivatedRoute) { 
    if(this.router.url !== '/profile') this.profile = false
    else this.backState = true;
    
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  logout(){
  	localStorage.removeItem('user')
  	this.router.navigate(['/'])
  }

  ngOnInit() {
    switch(this.router.url){
      case '/register':
        this.logged = false
      break;
      case '/':
        this.logged = false
      break;
      default:
        this.logged = true;
      break;
    }
  }

}
