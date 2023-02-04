import { PublicPrivateInterceptor } from '@/interceptors/axios.interceptor'
import '@/styles/reset.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  PublicPrivateInterceptor()
  return <Component {...pageProps} />
}
