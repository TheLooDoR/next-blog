import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { DEFAULT_THEME } from '../../theme'

const Textarea = styled.div`
  textarea {
    width: 100%;
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

interface TextareaProps {
  value: string
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void
  className?: string
  rows?: number
  name?: string
}

export const TextareaComponent: FC<TextareaProps> = ({
  value,
  onChange,
  className,
  rows,
  name,
}) => {
  return (
    <Textarea>
      <textarea
        value={value}
        onChange={onChange}
        className={className}
        rows={rows}
        name={name}
      />
    </Textarea>
  )
}
