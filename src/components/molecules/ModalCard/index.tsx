import { Modal } from 'components/atoms'
import * as s from './styles'

interface IModalCard {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

const ModalCard: React.FC<IModalCard> = ({
  isOpen,
  setIsOpen,
  title,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <s.Card>
        <s.CardHeader>
          <s.ModalTitle>{title}</s.ModalTitle>
          <s.Image
            src="cancel.png"
            alt="Fechar"
            width="16px"
            height="16px"
            onClick={() => setIsOpen(false)}
          />
        </s.CardHeader>
        {children}
      </s.Card>
    </Modal>
  )
}

export default ModalCard
