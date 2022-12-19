import '../styles/globals.scss'
import { Andika } from '@next/font/google'

const andika = Andika({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={andika.className}>
      <Component {...pageProps} />
    </main>
  )
}
