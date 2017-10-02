import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdIconModule, MatCardModule],
    exports: [MdButtonModule, MdIconModule, MatCardModule],
  })
  export class MyMaterialModule { }