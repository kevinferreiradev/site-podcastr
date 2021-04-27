import { Header } from '../componentes/Header'
import { Player } from '../componentes/Player';


import '../styles/global.scss'

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../Contexts/PlayerContext';

import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider> 
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
          </main>
          <Player />
      </div>  
    </PlayerContextProvider>                    
  )
  
}

export default MyApp
