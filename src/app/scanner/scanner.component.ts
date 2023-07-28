import { Component } from '@angular/core';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
	videoWidth = 640;
	videoHeight = 480;
	decodedValue: string | null = null;
	isCorrect: boolean | null = null;
	expectedQRCodeValue = 'YOUR_EXPECTED_QR_CODE_VALUE';
  
	private codeReader: BrowserMultiFormatReader;
  
	constructor() {
		this.codeReader = new BrowserMultiFormatReader();
		// this.codeReader.hints = [DecodeHintType.TRY_HARDER]
		// this.codeReader.setHints([DecodeHintType.TRY_HARDER]); // Optional: Improve QR code detection
	}
	formats: BarcodeFormat[] = [
		BarcodeFormat.QR_CODE
	];
	scanQRCode(qrCodeResult: any): void {
		this.decodedValue = qrCodeResult;
		this.isCorrect = this.decodedValue === this.expectedQRCodeValue;
	
		const audio = new Audio(this.isCorrect ? 'assets/sound/success.wav' : 'assets/sound/error.wav');
		audio.currentTime = 0;
		audio.play();
	}

	handleScanError(error: any): void {
		console.error('QR code scan error:', error);
	}
}
