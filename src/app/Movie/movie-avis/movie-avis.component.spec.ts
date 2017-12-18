import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAvisComponent } from './movie-avis.component';

describe('MovieAvisComponent', () => {
  let component: MovieAvisComponent;
  let fixture: ComponentFixture<MovieAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
