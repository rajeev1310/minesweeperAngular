import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() mineId: number;

  constructor() { }

  ngOnInit() {
  }

}
