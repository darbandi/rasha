import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const UI_InputCheckbox = styled.input`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    width: ${remCalc(20)};
    height: ${remCalc(20)};
    border-radius: ${remCalc(2)};
    border: ${remCalc(1)} solid ${colors.gray};
    background-color: ${colors.white};
    cursor: pointer;

    display: grid;
    place-content: center;

    appearance: none;
    margin: 0;
    font: inherit;
    color: currentColor;
    transform: translateY(-0.075em);

    &::before {
      content: '';
      width: ${remCalc(12)};
      height: ${remCalc(12)};
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${colors.green};
    }

    &:checked::before {
      transform: scale(1);
    }
  `}
`
