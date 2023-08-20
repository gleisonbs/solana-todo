import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';

export const WalletConnectProvider = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return 'https://sparkling-capable-sponge.solana-devnet.discover.quiknode.pro/63470c41e9b08f7941505c46d791317d969bf6b4/';
        }

        return clusterApiUrl(network);
    }, [network]);

    const wallets = useMemo(() => [new PhantomWalletAdapter()]);

    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    )
}