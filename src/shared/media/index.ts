import { css } from 'styled-components';

export interface BreakPoints {
  tablet: number;
  desktop: number;
  wideDesktop: number;
}

// breakpoints
export const breakpoints: BreakPoints = {
  tablet: 768,
  desktop: 1024,
  wideDesktop: 1280,
};

/**
 * Set up template literal media queries
 * Mobile-first approach
 */
export const media = {
  tablet: (literals: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.tablet}px) {
      ${css(literals)};
    }
  `,

  desktop: (literals: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(literals)};
    }
  `,

  wideDesktop: (literals: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(literals)};
    }
  `,
};
