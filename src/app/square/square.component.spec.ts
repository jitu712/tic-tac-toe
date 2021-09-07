import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#color should be primary if #value is null', () => {
    const squareDe: DebugElement = fixture.debugElement;
    const squareElement: HTMLElement = squareDe.nativeElement
    const button = squareElement.querySelector('button');
    expect(button?.getAttribute('color')).toEqual('primary');
  })

  it('#color should be accent if #value is X', () => {
    component.value = 'X';
    fixture.detectChanges();
    const squareDe: DebugElement = fixture.debugElement;
    const squareElement: HTMLElement = squareDe.nativeElement
    const button = squareElement.querySelector('button');
    expect(button?.getAttribute('color')).toEqual('accent');
  })

  it('#color should be warn if #value is O', () => {
    component.value = 'O';
    fixture.detectChanges();
    const squareDe: DebugElement = fixture.debugElement;
    const squareElement: HTMLElement = squareDe.nativeElement
    const button = squareElement.querySelector('button');
    expect(button?.getAttribute('color')).toEqual('warn');
  })
});
