import { SafeURLPipe } from './safe-url.pipe';
import { async, TestBed, inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeURLPipe', () => {
  let pipe: SafeURLPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ DomSanitizer ]
    })
    .compileComponents();
  }));

  it('create an instance', async( inject([DomSanitizer], (safe: DomSanitizer) => {
    pipe = new SafeURLPipe(safe);
    expect(pipe).toBeTruthy();
  })));
});
