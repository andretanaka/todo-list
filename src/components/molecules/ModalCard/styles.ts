import styled from 'styled-components'
import { Text } from 'components/atoms'

export const Card = styled.div`
  position: fixed;
  background: white;
  width: 400px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) =>
    `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`};
  border-radius: 12px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Image = styled.img`
  cursor: pointer;
`

export const ModalTitle = styled(Text)`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fontFamily['Poppins Bold']};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`
