import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticModeModalComponent } from './critic-mode-modal.component';

describe('CriticModeModalComponent', () => {
  let component: CriticModeModalComponent;
  let fixture: ComponentFixture<CriticModeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticModeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticModeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
