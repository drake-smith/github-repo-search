import { breakpoints, media } from './';

describe('Media queries and breakpoints', () => {
  test('Media object contains all the media queries', () => {
    expect(Object.keys(media)).toContain('wideDesktop');
    expect(Object.keys(media)).toContain('desktop');
    expect(Object.keys(media)).toContain('tablet');
  });

  test('Breakpoints object contains all the breakpoints', () => {
    expect(Object.keys(breakpoints)).toContain('wideDesktop');
    expect(Object.keys(breakpoints)).toContain('desktop');
    expect(Object.keys(breakpoints)).toContain('tablet');
  });
});
