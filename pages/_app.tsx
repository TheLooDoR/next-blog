import '../styles/globals.css'
import { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
