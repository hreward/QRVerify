import { Component } from '@angular/core';
import { GlobalDataService } from '../gen-service.service';

@Component({
	selector: 'app-scannedresult',
	templateUrl: './scannedresult.component.html',
	styleUrls: ['./scannedresult.component.css']
})
export class ScannedresultComponent {

	isCorrect: null | boolean = null

	constructor(private globalService: GlobalDataService){}

	ngOnInit(){
		this.globalService.isQRCorrect.subscribe({
			next: (value)=> {this.isCorrect = value;}
		});
	}

}
