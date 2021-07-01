import { AnimatedLoading, Modal, Text } from 'components/atoms'
import * as s from './styles'

const Loading = ({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
  return (
    <Modal isOpen={isLoading} setIsOpen={setIsLoading} canUserClose={false}>
      <s.ModalWrapper>
        <AnimatedLoading />
        <Text color="white">Aguarde um instante...</Text>
      </s.ModalWrapper>
    </Modal>
  )
}

export default Loading
