import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAvisComponent } from './game-avis.component';

describe('GameAvisComponent', () => {
  let component: GameAvisComponent;
  let fixture: ComponentFixture<GameAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
