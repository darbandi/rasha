import styled, { css } from 'styled-components'
import { ThemeType } from '@/theme'

export const Container = styled.div`
  ${({ theme: { colors, remCalc } }: ThemeType) => css`
    background: ${colors.black};
    width: ${remCalc(480)};
    height: auto;
    padding: ${remCalc(25)};
    border-radius: ${remCalc(4)};
    border: 1px solid ${colors.gray};
    background: ${colors.gray_light};
  `}
`
