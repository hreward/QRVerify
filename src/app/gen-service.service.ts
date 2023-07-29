import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GlobalDataService {
	isQRCorrect:BehaviorSubject<boolean | null>;
	
	constructor() {
		this.isQRCorrect = new BehaviorSubject<boolean | null>(null);
	}
}
