import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumAvisComponent } from './album-avis.component';

describe('AlbumAvisComponent', () => {
  let component: AlbumAvisComponent;
  let fixture: ComponentFixture<AlbumAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
