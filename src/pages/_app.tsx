import '../styles/global.scss';
import { Header } from '../componentes/Header';
import { Player } from '../componentes/Player';
import {PlayerContextProvider} from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';
function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>

    </PlayerContextProvider>

  )
}

export default MyApp
