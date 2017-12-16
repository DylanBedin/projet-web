import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourirComponent } from './parcourir.component';

describe('ParcourirComponent', () => {
  let component: ParcourirComponent;
  let fixture: ComponentFixture<ParcourirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcourirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcourirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
