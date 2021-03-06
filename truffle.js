const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.LORDLESS_TEST_MNEMONIC;
const mnemonicProd = process.env.LORDLESS_PROD_MNEMONIC;
const infura_key = process.env.INFURA_KEY;
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 0xfffffffff,
      gasPrice: 0x01,
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
      gas: 0xfffffffff,
      gasPrice: 0x01,
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, infura_key ? `https://ropsten.infura.io/v3/${infura_key}` : 'https://ropsten.infura.io'),
      network_id: '*',
      gas: 2000000,
      gasPrice: 10000000000,
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonicProd, infura_key ? `https://mainnet.infura.io/v3/${infura_key}` : 'https://mainnet.infura.io'),
      network_id: '*',
      gas: 2000000,
      gasPrice: 4000000000,
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
