import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string = '';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
  }

  get player(): string {
    // console.log('player()');
    return this.xIsNext ? 'X' : 'O';
  }

  move(idx: number): void {
    if (!this.squares[idx]) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    if (this.winner) {
      this._snackBar.open(`${this.winner} won the game`, 'Close', { duration: 3000 });
    } else if (!this.squares.includes(null)) {
      this._snackBar.open(`Nobody won. Get good.`, 'Close', { duration: 3000 });
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }


}
