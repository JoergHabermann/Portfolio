import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalENComponent } from './legal-en.component';

describe('LegalENComponent', () => {
  let component: LegalENComponent;
  let fixture: ComponentFixture<LegalENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
