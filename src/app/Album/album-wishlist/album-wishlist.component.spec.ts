import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumWishlistComponent } from './album-wishlist.component';

describe('AlbumWishlistComponent', () => {
  let component: AlbumWishlistComponent;
  let fixture: ComponentFixture<AlbumWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
