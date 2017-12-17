import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCollectionComponent } from './serie-collection.component';

describe('SerieCollectionComponent', () => {
  let component: SerieCollectionComponent;
  let fixture: ComponentFixture<SerieCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
