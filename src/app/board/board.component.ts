import {Component, Input, OnInit, Renderer2} from '@angular/core';

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
    this.bomb = Array.apply(null, Array(30)).map(function(item, index){
      return Math.floor(Math.random() * 100);
    });
  }
  clickBtn(cell) {
    // console.log('Its ' + cell);
    // console.log(cell);
    // console.log(this.bomb);
    for (let i = 0; i < this.bomb.length; i++) {
      if (this.bomb[i] === cell) {
        alert('You Lose');
        this.renderer.setStyle(event.target, 'background-color', 'red');
        location.reload();
      }
      else {
        this.renderer.setStyle(event.target, 'background-color', 'blue');
      }
    }
  }
}
