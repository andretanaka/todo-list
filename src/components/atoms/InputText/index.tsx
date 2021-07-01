import * as s from './styles'

interface IInputText {
  value: string
  placeholder?: string
  onChangeHandler: React.Dispatch<React.SetStateAction<string>>
  onBlurHandler?: () => void
  onClickImage?: () => void
  icon?: 'delete' | 'search' | 'add'
  todoCompleted?: boolean
}

const TextInput: React.FC<IInputText> = ({
  value,
  placeholder,
  onChangeHandler,
  onBlurHandler = () => null,
  onClickImage = () => null,
  icon,
  todoCompleted = false,
  ...rest
}) => {
  const iconContent = () => {
    switch (icon) {
      case 'delete':
        return 'recycle-bin.png'
      case 'search':
        return 'loupe.png'
      case 'add':
        return 'plus.png'
      default:
        return ''
    }
  }

  return (
    <s.InputContainer>
      <s.Input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChangeHandler(event.target.value)}
        onBlur={() => onBlurHandler()}
        todoCompleted={todoCompleted}
        {...rest}
      />
      {icon && (
        <s.Image
          src={`${iconContent()}`}
          alt="Ícone de exclusão"
          width="24px"
          height="24px"
          onClick={() => onClickImage()}
        />
      )}
    </s.InputContainer>
  )
}

export default TextInput
