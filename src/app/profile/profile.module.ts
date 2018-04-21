import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostService } from '../shared/services/post.service';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { UserService } from '../shared/services/user.service';

const routes: ModuleWithProviders = RouterModule.forChild([
	{
		path : 'profile/:id',
		component : ProfileComponent
	},
])


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSnackBarModule,
    MatButtonModule,
    routes
  ],
  declarations: [ProfileComponent],
  providers: [PostService, UserService]
})
export class ProfileModule { }
