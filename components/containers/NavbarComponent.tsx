import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { DEFAULT_THEME } from '../../theme'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  padding: 20px 30px;
  color: #fff;
  background: ${DEFAULT_THEME.colors.main};
  @media (min-width: 480px) {
    justify-content: space-between;
    flex-flow: row wrap;
  }
`

const NavbarTitle = styled.h1`
  cursor: default;
`

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavbarLink = styled.a`
  text-transform: uppercase;
  margin-left: 10px;
  transition: opacity ${DEFAULT_THEME.animationSpeed} ease;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  @media (min-width: 480px) {
    margin-top: 0;
  }
`

export const NavbarComponent: FC = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>Next.js blog</NavbarTitle>
      <NavbarLinks>
        <Link href={'/'}>
          <NavbarLink>Home</NavbarLink>
        </Link>
        <Link href={'/posts/new'}>
          <NavbarLink>Create post</NavbarLink>
        </Link>
      </NavbarLinks>
    </NavbarContainer>
  )
}
