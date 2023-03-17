const { ethers, getNamedAccounts } = require("hardhat");

const main = async () => {
  try {
    const { deployer } = await getNamedAccounts();
    const fundingContract = await ethers.getContract("Funding", deployer);
    console.log(`Got contract Funding at ${fundingContract.address}`);
    console.log("Funding Money........");

    const transactionContract = await fundingContract.fund({
      value: ethers.utils.parseEther("0.1"),
    });
    transactionContract.wait(5);
    console.log("Funded!");
  } catch (error) {
    console.log(error);
  }
};

main();
