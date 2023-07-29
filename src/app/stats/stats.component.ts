import { Component } from '@angular/core';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.css']
})
export class StatsComponent {
	scanCount:any = 0;
	passCount:any = 0;
	failCount:any = 0;
	ngOnInit(){
		this.passCount = localStorage.getItem('passscans') || '0'
		this.failCount = localStorage.getItem('failscans') || '0'
		this.scanCount = parseInt(this.passCount) + parseInt(this.failCount);
	}
}
