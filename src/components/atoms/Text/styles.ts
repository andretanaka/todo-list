import styled, { css } from 'styled-components'
import { themeColors } from 'styles/theme'

const truncate = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface IText {
  color: keyof typeof themeColors
  textAlign: 'left' | 'center' | 'right' | 'unset'
  textTransform:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana'
  truncate?: boolean
}

const TextStyle = styled.p<IText>`
  color: ${(props) => props.theme.colors[props.color]};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  ${(props) => props.truncate && truncate};
`

export default TextStyle
