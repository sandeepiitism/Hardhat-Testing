require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => { 
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) { 
    console.log(account.address); 
  } 
}); 

const INFURA_API_KEY = "xxxx";

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_PRIVATE_KEY = "xxxx";

module.exports = {
  solidity: "0.8.9",
  network: {
    rinkeby: { 
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,  
      accounts: [`${RINKEBY_PRIVATE_KEY}`],
    },
  },
};
