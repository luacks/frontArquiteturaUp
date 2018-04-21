import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { LandingComponent } from './landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { UserService } from '../shared/services/user.service'
import { HttpModule } from '@angular/http'
const routes: ModuleWithProviders = RouterModule.forChild([
	{
		path : '',
		component : LandingComponent
	},
  {
    path : 'register',
    component : LandingComponent
  }
])


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    routes
  ],
  declarations: [LandingComponent, LoginComponent, RegisterComponent],
  providers : [UserService]
})
export class LandingModule { }

