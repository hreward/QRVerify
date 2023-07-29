import { Component } from '@angular/core';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from '@zxing/library';
import { GlobalDataService } from '../gen-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
	decodedValue: string | null = null;
	isCorrect: boolean | null = null;
	expectedQRCodeValue = '96dccf0ec4b7846dc';
	scanned = false;
  
	private codeReader: BrowserMultiFormatReader;
  
	constructor(private globalService: GlobalDataService, private router: Router) {
		const target = new Date("08/06/2023");
		if(new Date() > target){
			alert("This app has served its purpose and is no more useful.");
			this.router.navigateByUrl("/home");
			// return;
		}

		this.codeReader = new BrowserMultiFormatReader();
		// this.codeReader.hints = [DecodeHintType.TRY_HARDER]
		// this.codeReader.setHints([DecodeHintType.TRY_HARDER]); // Optional: Improve QR code detection

	}
	ngOnInit(){
		this.globalService.isQRCorrect.next(null);
	}

	formats: BarcodeFormat[] = [
		BarcodeFormat.QR_CODE
	];
	scanQRCode(qrCodeResult: any): void {
		this.decodedValue = qrCodeResult;
		this.isCorrect = this.decodedValue === this.expectedQRCodeValue;
		this.scanned = true;
		if(this.isCorrect){
			var audio = new Audio('assets/sound/success.wav');
			audio.currentTime = 0;
			audio.play();

			//save to local store
			const passScans = localStorage.getItem('passscans') || '0';
			const newPassScans = parseInt(passScans) + 1;
			localStorage.setItem('passscans', newPassScans.toString());
		} else {
			var audio = new Audio('assets/sound/error.wav');
			audio.currentTime = 0;
			audio.play();

			//save to local store
			const failScans = localStorage.getItem('failscans') || '0';
			const newFailScans = parseInt(failScans) + 1;
			localStorage.setItem('failscans', newFailScans.toString());
		}
		this.globalService.isQRCorrect.next(this.isCorrect);
		this.router.navigateByUrl('/result')
	}

	handleScanError(error: any): void {
		console.error('QR code scan error:', error);
	}
}
