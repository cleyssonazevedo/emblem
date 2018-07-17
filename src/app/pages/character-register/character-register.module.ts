import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRegisterComponent } from './character-register.component';
import { RouterModule } from '@angular/router';
import { ImageInputModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ImageInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CharacterRegisterComponent
      }
    ])
  ],
  declarations: [CharacterRegisterComponent]
})
export class CharacterRegisterModule { }
