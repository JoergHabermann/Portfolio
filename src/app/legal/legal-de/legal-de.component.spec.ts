import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDEComponent } from './legal-de.component';

describe('LegalDEComponent', () => {
  let component: LegalDEComponent;
  let fixture: ComponentFixture<LegalDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalDEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
