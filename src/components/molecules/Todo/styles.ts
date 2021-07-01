import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  height: 24px;
  cursor: pointer;
`
