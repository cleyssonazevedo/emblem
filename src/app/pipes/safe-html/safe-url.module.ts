import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeURLPipe } from './safe-url.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SafeURLPipe ],
  exports: [ SafeURLPipe ]
})
export class SafeURLModule { }
