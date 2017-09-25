import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-remain-bombs',
  templateUrl: './remain-bombs.component.html',
  styleUrls: ['./remain-bombs.component.css']
})
export class RemainBombsComponent implements OnInit {

  @Input() remainBombs: number;

  constructor() { }

  ngOnInit() {
  }

}
