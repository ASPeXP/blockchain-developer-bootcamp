const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Token", () => {
  let token;

  beforeEach(async () => {
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("Dapp University", "DAPP", "1000000");
  });

  describe("Deployment", () => {
    const name = "Dapp University";
    // Tests go inside here...
    it("has a correct name", async () => {
      // Read token name
      const name = await token.name();
      // Check that name is correct
      expect(name).to.equal(name);
    });

    it("has a correct symbol", async () => {
      expect(await token.symbol()).to.equal("DAPP");
    });

    it("has a correct owner", async () => {
      // Read token name
      const owner = await token.owner();
      // Check that name is correct
      expect(owner).to.equal("Prapath");
    });

    it("has a correct decimals", async () => {
      // Read token name
      const decimals = await token.decimals();
      // Check that name is correct
      expect(decimals).to.equal("18");
    });

    it("has a correct total supply", async () => {
      // Read token name
      const value = tokens("1000000");
      // const value = ethers.utils.parseUnits('1000000','ether')
      const totalSupply = await token.totalSupply();
      // Check that name is correct
      // expect(totalSupply).to.equal("1000000000000000000000000")
      expect(totalSupply).to.equal(value);
    });
  });
});
