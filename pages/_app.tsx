import '../styles/globals.css'
import { CombatProvider } from '../contexts/CombatContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CombatProvider>
        <Component {...pageProps} />
      </CombatProvider>
    </>
  )
}

export default MyApp
