import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() title: string;
  listNumber: number[] = [];
  bomb: number [] = [];


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.listNumber.push(i);
    }
    this.bomb = Array.apply(null, Array(30)).map((item, index) =>{
      return Math.floor(Math.random() * 100);
    });
    console.log(this.bomb);
  }

  clickBtn(cell: number) {
    // console.log('Its ' + cell);
    // console.log(cell);
    // console.log(this.bomb);

    let bomb = this.bomb.find((index) => {
      return (index === cell);
    });
    if (isUndefined(bomb)) {
      this.renderer.setStyle(event.target, 'background-color', 'blue');
    } else {
      this.renderer.setStyle(event.target, 'background-color', 'red');
    }
  }
}
