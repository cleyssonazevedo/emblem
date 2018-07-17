import { CharacterRegisterModule } from './character-register.module';

describe('CharacterRegisterModule', () => {
  let characterRegisterModule: CharacterRegisterModule;

  beforeEach(() => {
    characterRegisterModule = new CharacterRegisterModule();
  });

  it('should create an instance', () => {
    expect(characterRegisterModule).toBeTruthy();
  });
});
