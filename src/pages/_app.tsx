import { Header } from '../componentes/Header'
import { Player } from '../componentes/Player';
import { PlayerContext } from '../Contexts/PlayerContext';

import '../styles/global.scss'

import styles from '../styles/app.module.scss';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value={'Diego'}>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
