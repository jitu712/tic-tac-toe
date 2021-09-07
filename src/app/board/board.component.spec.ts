import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#move should update #squares', () => {
    const index = 1;
    component.move(index);
    expect(component.squares[index]).toEqual('X');
  })

  it('#move 0,4,8 should win X', () => {
    const indices = [0, 1, 4, 7, 8];
    indices.forEach(i => component.move(i))
    expect(component.winner).toEqual('X');
  })

  it('even #move should make X as current player', () => {
    const index = (Math.random() * 9) / 1;
    component.move(index);
    if (!(index % 2))
      expect(component.xIsNext).toBeTruthy();
    else
      expect(component.xIsNext).toBeFalsy();
  })
});
