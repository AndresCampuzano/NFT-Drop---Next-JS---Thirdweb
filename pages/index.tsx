import type { NextPage } from 'next'
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";
import {Login} from "../components/Login";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {NFTDisplay} from "../components/NFTDisplay";


const styles = {
  wrapper: 'flex min-h-screen bg-[#1d1d1d] text-gray-200',
  container: 'flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0',
  infoSection: 'lg:w-2/3 px-10',
  mobileDisplaySection: 'h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4',
  desktopDisplaySection: 'hidden lg:flex flex-1 lg:w-1/3',
}

const Home: NextPage = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()

  return (
    <>
      {address ? (
          <div className={styles.wrapper}>
            {/*<Head>*/}
            {/*  <title>Home | NFT Drop</title>*/}
            {/*</Head>*/}
            <div className={styles.container}>
              <section className={styles.infoSection}>
                <Header logout={disconnect} />
                <div className={styles.mobileDisplaySection}>
                  <NFTDisplay />
                </div>
                <Hero />
              </section>
              <section className={styles.desktopDisplaySection}>
                <NFTDisplay />
              </section>
            </div>
          </div>
      ) : (
          <Login  login={connectWithMetamask}/>
      )}
    </>
  )
}

export default Home
