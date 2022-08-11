//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    string public name ;
    string public symbol;
    string public owner = "Prapath";
    uint256 public decimals = 18;
    uint256 public totalSupply ;

    // Track balances
    mapping(address => uint256) public balanceOf;
    // Send tokens

    constructor(string memory _name, string memory _symbol, uint256  _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply *  (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }
}
