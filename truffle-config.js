require('dotenv').config()
const { TruffleProvider } = require('@harmony-js/core')
const url = process.env.LOCAL_URL;
const account_1_mnemonic = process.env.MNEMONIC
const account_1_private_key = process.env.PRIVATE_KEY
const mainnet_private_key = process.env.MAINNET_PRIVATE_KEY
const testnet_url = process.env.TESTNET_URL
const testnet_0_url = process.env.TESTNET_0_URL
const testnet_1_url = process.env.TESTNET_1_URL
const mainnet_0_url = process.env.MAINNET_0_URL
gasLimit = process.env.GAS_LIMIT
gasPrice = process.env.GAS_PRICE

module.exports = {


  networks: {
    development: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          url,
          { memonic: account_1_mnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice},
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
      skipDryRun: true,
    },
    testnet: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          testnet_url,
          { memonic: account_1_mnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice},
        );
        const newAcc = truffleProvider.addByPrivateKey(account_1_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
      skipDryRun: true,
    },
    mainnet0: {
      network_id: '1', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          mainnet_0_url,
          { memonic: account_1_mnemonic },
          { shardID: 0, chainId: 1 },
          { gasLimit: gasLimit, gasPrice: gasPrice },
        );
        const newAcc = truffleProvider.addByPrivateKey(mainnet_private_key);
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      },
      mocha: {
        // enableTimeouts: false,
        // before_timeout: 120000 // Here is 2min but can be whatever timeout is suitable for you.
    },
      skipDryRun: true,
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 120000 // Here is 2min but can be whatever timeout is suitable for you.
},
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
      //  evmVersion: "byzantium"
      // }
    }
  }
}
