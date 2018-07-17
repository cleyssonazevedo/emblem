import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CharacterRegisterComponent } from './character-register.component';

import { ImageInputModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
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
