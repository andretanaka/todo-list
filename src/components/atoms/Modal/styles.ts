import styled from 'styled-components'

interface IModal {
  isOpen: boolean
}
export const Container = styled.div<IModal>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  z-index: 2;
`
