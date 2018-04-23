import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostService } from '../shared/services/post.service';
import { MatButtonModule, MatSnackBarModule, MatTabsModule, MatListModule } from '@angular/material';
import { UserService } from '../shared/services/user.service';
import { ProfileListComponent } from './components/profile-list/profile-list.component';

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
    MatTabsModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonModule,
    routes
  ],
  declarations: [ProfileComponent, ProfileListComponent],
  providers: [PostService, UserService]
})
export class ProfileModule { }
