const { network } = require("hardhat");
const {
  networkConfigs,
  developmentChains,
} = require("../helper.hardhat.config");
const { verify } = require("../utils/verify");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { log, deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  if (chainId == 31337) {
    const ethUsdPrice = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdPrice.address;
  } else {
    ethUsdPriceFeedAddress = networkConfigs[chainId]["ethUsdPriceFeed"];
  }
  log("Deploying FundMe and waiting for confirmations.........");

  const funding = await deploy("Funding", {
    from: deployer,
    args: [ethUsdPriceFeedAddress],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`Contract Deployed on ${funding.address}`);

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_KEY) {
    await verify(funding.address, [ethUsdPriceFeedAddress]);
  }
};

module.exports.tags = ["all", "funding"];
