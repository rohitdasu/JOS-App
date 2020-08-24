import { TestBed } from '@angular/core/testing';

import { SlideGuard } from './slide.guard';

describe('SlideGuard', () => {
  let guard: SlideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SlideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
