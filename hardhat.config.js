require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const rpc_url = process.env.RPC_URL;
const wallet_key = process.env.PRIVATE_KEY;
const etherscan_key = process.env.ETHERSCAN_KEY;
const coinmarketcap = process.env.COINMARKETCAP;
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    "goerli":{
      url:rpc_url,
      accounts:[wallet_key],
      chainId:5,
      
    }
  },
  etherscan:{
    apiKey:etherscan_key
  },
  gasReporter:{
    enabled:true,
    coinmarketcap:coinmarketcap,
    currency:"INR",
    noColors:true,
    outputFile:"gas-reporter.txt"
  },
  solidity: "0.8.18",
};
