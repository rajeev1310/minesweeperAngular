import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {isUndefined} from 'util';

import { CellService } from '../cell/cell.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() title: string;
  numBombs: number;
  numRemainBombs: number;
  listNumber: number[] = [];
  bomb: number [] = [];




  constructor(private renderer: Renderer2, private CellService: CellService) { }


  ngOnInit() {
    this.numBombs = 0;
    this.numRemainBombs = 30;
    for (let i = 1; i <= 100; i++) {
      this.listNumber.push(i);
    }
    this.bomb = Array.apply(null, Array(30)).map((item, index) =>{
      return Math.floor(Math.random() * 100);
    });
    console.log(this.bomb);
  }

  clickBtn(cell: number) {
    let bomb = this.bomb.find((index) => {
      return (index === cell);
    });
    if (isUndefined(bomb)) {
      this.renderer.setStyle(event.target, 'background-color', 'blue');
    } else {
      this.renderer.setStyle(event.target, 'background-color', 'red');
      this.numBombs++; // Increase the number of bombs
      this.numRemainBombs--;
    }
  }
}
