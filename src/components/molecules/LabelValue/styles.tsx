import styled from 'styled-components'
import { Text } from 'components/atoms'

export const Label = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily['Poppins Bold']};
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`

export const Value = styled(Text)`
  font-size: 18px;
`

export const LabelValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
