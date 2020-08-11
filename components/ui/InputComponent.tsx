import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { DEFAULT_THEME } from '../../theme'

const Input = styled.div`
  display: flex;
  flex-flow: column;
  input {
    font-size: 16px;
    padding: 10px 5px;
    border: 2px solid ${DEFAULT_THEME.colors.main};
    border-radius: 5px;
    transition: border-color ${DEFAULT_THEME.animationSpeed} ease;
    &:focus {
      outline: none;
      border-color: #00bfff;
    }
  }
`

interface InputProps {
  value: string
  type?: string
  label?: string
  id: string
  placeholder?: string
  className?: string
  name?: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

export const InputComponent: FC<InputProps> = ({
  value,
  onChange,
  label,
  type = 'text',
  id,
  placeholder,
  className,
  name,
}) => {
  return (
    <Input className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </Input>
  )
}
