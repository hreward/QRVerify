import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { ScannedresultComponent } from './scannedresult/scannedresult.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "/home"
	},
	// {
	// 	path: '**', 
	// 	redirectTo: "/home",
	// },
	{
		path: 'home',
		component: ScannedresultComponent
	},
	{
		path: 'scan',
		component: ScannerComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
