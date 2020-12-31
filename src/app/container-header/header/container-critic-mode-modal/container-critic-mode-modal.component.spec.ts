import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCriticModeModalComponent } from './container-critic-mode-modal.component';

describe('ContainerCriticModeModalComponent', () => {
  let component: ContainerCriticModeModalComponent;
  let fixture: ComponentFixture<ContainerCriticModeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCriticModeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCriticModeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
