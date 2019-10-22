import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatButton, MatButtonModule, MatDivider, MatDividerModule} from '@angular/material';

const materials = [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule
]

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
