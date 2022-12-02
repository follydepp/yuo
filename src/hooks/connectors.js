import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from '@binance-chain/bsc-connector';


export const POLLING_INTERVAL = 12000;
export const infura_Id = "999e6f23398a4c4d823502c0e9cc2665";

export const injected = new InjectedConnector({
    supportedChainIds: [5, 1],
});

export const RPC_URLS = {
    5: "https://goerli.infura.io/v3/999e6f23398a4c4d823502c0e9cc2665",
   // 1: "https://mainnet.infura.io/v3/999e6f23398a4c4d823502c0e9cc2665"
      // 1: "https://mainnet.infura.io/v3/999e6f23398a4c4d823502c0e9cc2665"
    
};

export const walletconnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    qrcode: true,
    infuraId: infura_Id,
});


export const bscwallet = new BscConnector({
    supportedChainIds: [5] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
  })