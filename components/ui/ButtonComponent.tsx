import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { DEFAULT_THEME } from '../../theme'

const Button = styled.div`
  button {
    width: 100%;
    padding: 20px 30px;
    background: ${DEFAULT_THEME.colors.main};
    border: none;
    border-radius: 6px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color ${DEFAULT_THEME.animationSpeed} ease;
    &:hover {
      background: ${DEFAULT_THEME.colors.mainDark};
      cursor: pointer;
    }
  }
`

interface ButtonProps {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonComponent: FC<ButtonProps> = ({
  disabled = false,
  children,
  onClick,
  className,
  type,
}) => {
  return (
    <Button>
      <button
        disabled={disabled}
        onClick={onClick}
        className={className}
        type={type}
      >
        {children}
      </button>
    </Button>
  )
}
