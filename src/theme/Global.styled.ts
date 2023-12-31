import { createGlobalStyle, css } from 'styled-components'
import { responsive } from './tools'
import { ThemeType } from './Theme.styled'

export const GlobalStyles = createGlobalStyle`
${({ theme: { colors } }: ThemeType) => css`
  body,
  html {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 1%, 16%);
    overflow-x: hidden;
    direction: ltr;
    scroll-behavior: smooth;
    font-size: 16px;
    background-color: ${colors.white};

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.gray_800};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    * {
      scrollbar-color: #ccc #f1f1f1;
      scrollbar-width: thin;
    }

    ${responsive(
      'lg',
      css`
        font-size: 16px;
      `,
    )};
    ${responsive(
      'md',
      css`
        font-size: 14px;
      `,
    )};
    ${responsive(
      'sm',
      css`
        font-size: 14px;
      `,
    )};
  }

  .blur {
    filter: blur(3px);
  }
`}
`
