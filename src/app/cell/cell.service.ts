import {Injectable} from '@angular/core';

@Injectable()

export class CellService {
  id: number[] = [];
  isBomb: boolean;

    generateCell(): void  {
      for (let i = 1; i <= 100; i++) {
        this.id.push(i);
      }
  }
}
