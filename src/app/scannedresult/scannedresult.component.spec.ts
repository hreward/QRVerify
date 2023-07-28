import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannedresultComponent } from './scannedresult.component';

describe('ScannedresultComponent', () => {
  let component: ScannedresultComponent;
  let fixture: ComponentFixture<ScannedresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannedresultComponent]
    });
    fixture = TestBed.createComponent(ScannedresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
