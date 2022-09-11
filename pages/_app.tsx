import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <ThirdwebProvider
          desiredChainId={ChainId.Rinkeby}
          chainRpc={{
              [ChainId.Rinkeby] : 'https://rinkeby.infura.io/v3/00882779921b4e2aa87c628bc3970279'
          }}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
  )
}

export default MyApp
