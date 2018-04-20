import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'
import { MatMenuModule, MatIconModule, MatListModule, MatButtonModule, MatTooltipModule, MatSnackBarModule } from '@angular/material'
import { TweetComponent } from './components/tweet/tweet.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [NavbarComponent, TweetComponent],
  exports: [NavbarComponent, TweetComponent]
})
export class SharedModule { }
