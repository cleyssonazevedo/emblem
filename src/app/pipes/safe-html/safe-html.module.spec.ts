import { SafeURLModule } from './safe-url.module';

describe('SafeURLModule', () => {
  let safeURLModule: SafeURLModule;

  beforeEach(() => {
    safeURLModule = new SafeURLModule();
  });

  it('should create an instance', () => {
    expect(safeURLModule).toBeTruthy();
  });
});
