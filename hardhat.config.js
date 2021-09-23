require("@nomiclabs/hardhat-waffle");
require('@eth-optimism/hardhat-ovm')
require('dotenv').config();

// DO NOT share your private key with others
// DO NOT put real ETH into any of these test accounts
// DO NOT commit your .env file to Github
// Your secret seed and/or private key should be kept private at all times! 
const DEPLOYER_KEY = process.env.DEPLOYER_KEY

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [DEPLOYER_KEY]
    },
    arbitrum_test: {
      url: "https://arbitrum-rinkeby.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [DEPLOYER_KEY],
    },
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [DEPLOYER_KEY],
    },
    optimism: {
      url: "https://optimism-mainnet.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [DEPLOYER_KEY],
      gasPrice: 15000000, // required
      ovm: true // required for OVM compatibility
    },
    optimism_test: {
      url: "https://optimism-kovan.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [DEPLOYER_KEY],
      gasPrice: 15000000, // required
      ovm: true // required for OVM compatibility
    }
  }
}
