import { ImageInputModule } from './image-input.module';

describe('ImageInputModule', () => {
  let imageInputModule: ImageInputModule;

  beforeEach(() => {
    imageInputModule = new ImageInputModule();
  });

  it('should create an instance', () => {
    expect(imageInputModule).toBeTruthy();
  });
});
