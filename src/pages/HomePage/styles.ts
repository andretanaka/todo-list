import styled from 'styled-components'
import { Text } from 'components/atoms'

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray3};
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.spacing(3)}px 0px`};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: ${({ theme }) => `${theme.spacing(2)}px ${theme.spacing(2)}px`};
  height: 100%;
  border-radius: 16px;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  @media (max-width: 660px) {
    margin-left: 0px;
  }
`

export const Title = styled(Text)`
  font-size: 24px;
`
