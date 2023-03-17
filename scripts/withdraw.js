const { ethers, getNamedAccounts } = require("hardhat");

const main = async () => {
  try {
    const { deployer } = await getNamedAccounts();
    console.log(deployer)
    const fundingContract = await ethers.getContract("Funding", deployer);
    console.log(`Contract got on this ${fundingContract.address} address`);
    console.log("Withdraw....");
    const transactionResponse = await fundingContract.withdraw();
    transactionResponse.wait(5);
    console.log("Completed!");
  } catch (error) {
    console.log(error);
  }
};

main()
