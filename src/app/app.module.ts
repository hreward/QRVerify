import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { ScannerComponent } from './scanner/scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { StaticfooterComponent } from './partials/staticfooter/staticfooter.component';
import { ScannedresultComponent } from './scannedresult/scannedresult.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticfooterComponent,
    ScannerComponent,
    ScannedresultComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    ZXingScannerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
