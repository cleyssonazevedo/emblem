import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInputComponent } from './image-input.component';
import { SafeURLModule } from '../../pipes';

@NgModule({
  imports: [
    CommonModule,
    SafeURLModule
  ],
  declarations: [ImageInputComponent],
  exports: [ImageInputComponent]
})
export class ImageInputModule { }
