import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAvisComponent } from './serie-avis.component';

describe('SerieAvisComponent', () => {
  let component: SerieAvisComponent;
  let fixture: ComponentFixture<SerieAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
