import React, { createRef, forwardRef } from 'react'
import { themeColors } from 'styles/theme'

interface IInputText {
  color?: keyof typeof themeColors
  type?: string
}

const TextInput = forwardRef<
  HTMLInputElement,
  IInputText &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
>(({ color = 'black', type = 'text', ...rest }, ref) => {
  const inputRef = (ref || createRef()) as React.RefObject<HTMLInputElement>
  return (
    <input
      ref={inputRef}
      type={type}
      style={{ color: themeColors[color] }}
      {...rest}
    />
  )
})

export default TextInput
