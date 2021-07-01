import React, { useCallback, useEffect, useRef } from 'react'
import * as s from './styles'

interface IModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  canUserClose?: boolean
}

const Modal: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  canUserClose = true,
  children,
  ...rest
}): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (canUserClose && modalRef.current === event.target) {
      setIsOpen(false)
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    },
    [setIsOpen, isOpen]
  )

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (canUserClose) {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    }
  }, [canUserClose, keyPress])

  return (
    <s.Container isOpen={isOpen} ref={modalRef} onClick={closeModal} {...rest}>
      {children}
    </s.Container>
  )
}

export default Modal
