import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRegisterComponent } from './character-register.component';
import { SafeHTMLModule } from '../../pipes';

describe('CharacterRegisterComponent', () => {
  let component: CharacterRegisterComponent;
  let fixture: ComponentFixture<CharacterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRegisterComponent ],
      imports: [ SafeHTMLModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
