import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bomb-counting',
  templateUrl: './bomb-counting.component.html',
  styleUrls: ['./bomb-counting.component.css']
})
export class BombCountingComponent implements OnInit {

  @Input() NumberOfBomb: number;

  constructor() { }

  ngOnInit() {
  }

}
