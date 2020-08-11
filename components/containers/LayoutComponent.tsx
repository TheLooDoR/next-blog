import { FC } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { NavbarComponent } from './NavbarComponent'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1100px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`

interface LayoutProps {
  title?: string
}

export const LayoutComponent: FC<LayoutProps> = ({
  title = 'Next Blog',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, javascript, react" />
        <meta charSet="utf-8" />
      </Head>
      <NavbarComponent />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
