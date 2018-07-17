import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-register',
  templateUrl: './character-register.component.html',
  styleUrls: ['./character-register.component.scss']
})
export class CharacterRegisterComponent {
  public character: Character;

  constructor() {
    this.character = new Character();
  }

  limpar() {
    this.character = new Character();
  }
}
