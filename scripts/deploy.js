const { ethers } = require("hardhat");

async function main() {
      /*
      A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
      so nftContract here is a factory for instances of our GameItem contract.
      */
      //The contract factory stores instances of the contract which you pass into its getContractFactory function
      const nftContract = await ethers.getContractFactory("GameItem");

      //The contract is the deployed by calling the deploy function on the contract factory
      const deployedNFTContract = await nftContract.deploy();

      //We wait for the contract to deploy by calling the deployed function on the contract and awaiting it.
      await deployedNFTContract.deployed();

      console.log("NFT Contract Address:", deployedNFTContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
