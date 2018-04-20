import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component'
import { PostService } from '../shared/services/post.service'
import { HttpModule } from '@angular/http'
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule, MatSnackBar, MatSnackBarModule } from '@angular/material';

const routes: ModuleWithProviders = RouterModule.forChild([
	{
		path : 'home',
		component : HomeComponent
	},
])
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule, 
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpModule,
    routes
  ],
  declarations: [HomeComponent, PostComponent],
  providers: [PostService]
})
export class HomeModule { }
