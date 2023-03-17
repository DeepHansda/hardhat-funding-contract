require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-deploy');
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */

const rpc_url = process.env.RPC_URL;
const wallet_key = process.env.PRIVATE_KEY;
const etherscan_key = process.env.ETHERSCAN_KEY;
const coinmarketcap = process.env.COINMARKETCAP;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: rpc_url,
      accounts: [wallet_key],
      chainId: 5,
      blockConfirmations: 6,
    },
    // sepolia: {},
  },
  solidity: {
    compilers: [{ version: "0.8.18" }, { version: "0.6.6" }],
  },
  etherscan: {
    apiKey: etherscan_key,
  },
  gasReporter: {
    enabled: true,
    coinmarketcap: coinmarketcap,
    currency: "INR",
    noColors: true,
    outputFile: "gas-report.txt",
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
      2: 0,
    },
  },
};
