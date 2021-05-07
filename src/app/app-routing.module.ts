import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeyComponent } from './key/key.component';

const routes: Routes = [
	{
		path: '',
		component: KeyComponent,
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
