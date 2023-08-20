import Head from 'next/head'

import { WalletConnectProvider } from '../components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css';
import '../styles/global.css'
// Import WalletConnectionProvider from components
// Import the solana wallet css

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp
