import { themeColors } from 'styles/theme'

import TextStyle from './styles'

export interface IProps {
  color?: keyof typeof themeColors
  textAlign?: 'left' | 'center' | 'right' | 'unset'
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  truncate?: boolean
}

const Text: React.FC<IProps> = ({
  color = 'black',
  textTransform = 'none',
  textAlign = 'unset',
  children,
  ...rest
}) => (
  <TextStyle
    color={color}
    textAlign={textAlign}
    textTransform={textTransform}
    {...rest}
  >
    {children}
  </TextStyle>
)

export default Text
