//deploy.js
const hre = require("hardhat");
async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying the contracts from Address:", await deployer.getAddress());

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await hre.ethers.getContractFactory("Funcles", "FUNCLES")

    const token = await Token.deploy(3333, 60);
    await token.deployed();

    console.log("Token address:", token.address);

  }

main()
  .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });