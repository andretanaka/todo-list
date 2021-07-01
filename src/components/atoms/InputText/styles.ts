import styled from 'styled-components'

export const Input = styled.input<{ todoCompleted: boolean }>`
  height: 32px;
  padding: ${({ theme }) => `0px ${theme.spacing(1)}px`};
  ${({ todoCompleted }) =>
    todoCompleted && `text-decoration-line: line-through`};
`

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray2};
  display: flex;
  width: fit-content;
  align-items: center;
`

export const Image = styled.img`
  margin: ${({ theme }) => `0px ${theme.spacing(1)}px`};
  cursor: pointer;
`
