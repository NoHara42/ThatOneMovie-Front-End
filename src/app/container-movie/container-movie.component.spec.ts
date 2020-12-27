import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMovieComponent } from './container-movie.component';

describe('ContainerMovieComponent', () => {
  let component: ContainerMovieComponent;
  let fixture: ComponentFixture<ContainerMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
