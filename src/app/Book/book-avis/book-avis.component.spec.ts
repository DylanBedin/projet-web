import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAvisComponent } from './book-avis.component';

describe('BookAvisComponent', () => {
  let component: BookAvisComponent;
  let fixture: ComponentFixture<BookAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
