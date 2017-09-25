import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

import { CellService } from './cell/cell.service';
import { BombCountingComponent } from './bomb-counting/bomb-counting.component';
import { RemainBombsComponent } from './remain-bombs/remain-bombs.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    BombCountingComponent,
    RemainBombsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
