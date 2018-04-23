import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: ModuleWithProviders = RouterModule.forChild([
	{
		path : 'settings',
		component : SettingsComponent
	},
])


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    routes
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
