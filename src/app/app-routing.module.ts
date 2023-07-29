import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { ScannedresultComponent } from './scannedresult/scannedresult.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "/home"
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'scan',
		component: ScannerComponent
	},
	{
		path: 'result',
		component: ScannedresultComponent
	},
	{
		path: 'stats',
		component: StatsComponent
	},
	{
		path: '**', 
		redirectTo: "/home",
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
